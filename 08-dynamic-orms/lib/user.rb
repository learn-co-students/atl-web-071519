class User < BasicORM
  attr_accessor :id, :username, :password

  def initialize(props={})
    @id = props['id']
    @username = props['username']
    @password = props['password']
  end
end
