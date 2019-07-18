class User
  attr_reader :username, :bio

  def initialize(username, bio)
    @username = username
    @bio = bio
  end

  def tweets
    Tweet.all.select { |t| t.user == self }
  end

  # def tweets
  #   result = []
  #   Tweet.all.each do |tweet|
  #     if tweet.user == self
  #       result << tweet
  #     end
  #   end
  #   result
  # end

  def post_tweet(message)
    tweet = Tweet.new(self, message)
    self.tweets << tweet
  end
end
