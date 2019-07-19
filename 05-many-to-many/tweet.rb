class Tweet
  attr_reader :message
  attr_accessor :user

  @@all = []

  def initialize(user, message)
    @user = user
    @message = message
    @@all << self
  end
  
  def username
    # @user.username
    # self.user.username
    user.username
  end

  def self.all
    @@all
  end
end
