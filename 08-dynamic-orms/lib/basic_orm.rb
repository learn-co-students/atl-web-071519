class BasicORM
  def self.table_name
    "#{self.name.downcase}s"
  end

  def self.column_names
    DB[:conn].execute("PRAGMA table_info(#{table_name})").map { |hash| hash['name'] }
  end

  def self.non_id_columns
    self.column_names[1..]
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
    if self.persisted?
      DB[:conn].execute(update_sql)
    else
      DB[:conn].execute(insert_sql)
    end
  end

  def destroy
    sql = "DELETE FROM #{self.class.table_name} WHERE id=#{self.id}"
    DB[:conn].execute(sql)
  end

  private

  def column_values
    class.non_id_columns.map { |name| "\"#{self.send(col_name)}\"" }
  end

  def column_pairs
    names = self.class.non_id_columns
    names.zip(column_values)
  end

  def insert_sql
    <<-SQL
      INSERT INTO #{self.class.table_name} (#{self.class.non_id_columns.join(', ')})
      VALUES (#{column_values.join(', ')})
    SQL
  end

  def update_sql
    <<-SQL
      UPDATE #{self.class.table_name}
      SET #{column_pairs.map {|name, value| "#{name}=#{value}"}.join(', ')}
      WHERE id=#{self.id}
    SQL
  end
end