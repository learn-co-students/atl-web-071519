class Post < ActiveRecord::Base
  belongs_to :author, foreign_key: "user_id", class_name: "User"
  has_many :comments

  # def user
  #   User.find(self.user_id)
  # end

  # def comments
  #   Comment.where(post_id: self.id)
  # end
end