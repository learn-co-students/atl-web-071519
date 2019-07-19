class Tweet
  attr_reader :message
  attr_accessor :user

  @@all = []

  def initialize(user, message)
    @user = user
    @message = message
    @@all << self
  end

  def likers
    Like.all.select { |like| like.tweet == self }.map { |like| like.user }
  end

  # def likers
  #   result = []
  #   Like.all.each do |like|
  #     if like.tweet == self
  #       result << like.user
  #     end
  #   end
  #   result
  # end

  # def likers
  #   likes = Like.all.select {|l| l.tweet == self}
  #   likes.map {|l| l.user }
  # end
  
  def username
    # @user.username
    # self.user.username
    user.username
  end

  def self.all
    @@all
  end
end
