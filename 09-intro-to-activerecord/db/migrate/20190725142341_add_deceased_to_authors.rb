class AddDeceasedToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :deceased, :boolean, default: false
  end
end
