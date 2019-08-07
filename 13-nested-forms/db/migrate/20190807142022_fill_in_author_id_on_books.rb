class FillInAuthorIdOnBooks < ActiveRecord::Migration[5.2]
  def change
    Book.all.each do |book|
      author = Author.find_or_create_by(full_name: book.author)
      book.update(author_id: author.id)
    end
  end
end
