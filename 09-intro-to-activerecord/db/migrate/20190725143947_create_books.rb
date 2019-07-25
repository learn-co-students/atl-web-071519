class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :author_id
      t.string :title
      t.string :genre
      t.integer :year_published
    end
  end
end
