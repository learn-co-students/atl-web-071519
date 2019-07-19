class User
  attr_reader :username, :bio

  def initialize(username, bio)
    @username = username
    @bio = bio
    # @liked_tweets = []
  end

  def tweets
    Tweet.all.select { |t| t.user == self }
  end

  def liked_tweets
    result = []    
    likes = Like.all.select { |l| l.user == self }
    likes.each do |like|
      result << like.tweet
    end
    result
  end

  def post_tweet(message)
    Tweet.new(self, message)
  end
  
  def like_tweet(tweet)
    Like.new(self, tweet)
  end
end
