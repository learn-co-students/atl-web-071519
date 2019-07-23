class Tweet
  attr_accessor :id, :message, :username

  def self.all
    tweets = DB[:conn].execute("SELECT * FROM tweets")
    tweets.map { |hash| Tweet.new(hash) }
  end

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    if !self.persisted?
      self.save
    end
  end

  def persisted?
    @id != nil
  end

  def save
    sql = "INSERT INTO tweets (username, message) VALUES (\"#{@username}\", \"#{@message}\")"
    DB[:conn].execute(sql)
  end
end
