class User < ActiveRecord::Base
  has_many :comments
  has_many :posts

  # def comments
  #   Comment.where(user_id: self.id)
  # end

  # def posts
  #   Post.where(user_id: self.id)
  # end

  # def commented_posts
  #   comments = Comment.where(user_id: self.id)
  #   post_ids = comments.pluck(:post_id)
  #   Post.where(id: post_ids)
  # end
end