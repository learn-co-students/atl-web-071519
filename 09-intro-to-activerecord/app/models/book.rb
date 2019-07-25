class Book < ActiveRecord::Base
  def author
    Author.find(self.author_id)
  end
end
