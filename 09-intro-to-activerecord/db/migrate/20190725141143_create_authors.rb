class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |table|
      table.string :first_name
      table.string :last_name
      table.string :hobbies
    end
  end
end
