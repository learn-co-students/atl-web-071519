class Author < ActiveRecord::Base
  def full_name
    "#{first_name} #{last_name}"
  end

  def books
    Book.where(author_id: self.id)
  end
end
