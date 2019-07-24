class Tweet < BasicORM
  attr_accessor :id, :message, :username

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    if !self.persisted?
      self.save
    end
  end
end
