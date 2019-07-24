class BasicORM
  def self.table_name
    "#{self.name.downcase}s"
  end

  def self.column_names
    DB[:conn].execute("PRAGMA table_info(#{table_name})").map { |hash| hash['name'] }
  end

  def self.all
    records = DB[:conn].execute("SELECT * FROM #{table_name}")
    records.map { |hash| self.new(hash) }
  end

  def self.find(id)
    records = DB[:conn].execute("SELECT * FROM #{table_name} WHERE id=#{id} LIMIT 1")
    if records.length.zero?
      nil
    else
      self.new(records[0])
    end
  end

  def persisted?
    self.id != nil
  end

  def save
    save_columns = self.class.column_names[1..]
    if !self.persisted?
      insert_sql = <<-SQL
        INSERT INTO #{self.class.table_name} (#{save_columns.join(', ')})
        VALUES (#{save_columns.map { |col_name| self.send(col_name) }})
      SQL
      DB[:conn].execute(insert_sql)
    else
      # sql = "UPDATE tweets SET username='#{username}',message='#{message}' WHERE id=#{id}"
      # DB[:conn].execute(sql)
    end
  end

  def destroy
    sql = "DELETE FROM #{self.class.table_name} WHERE id=#{id}"
    DB[:conn].execute(sql)
  end
end