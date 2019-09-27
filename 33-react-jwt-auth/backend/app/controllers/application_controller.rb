class ApplicationController < ActionController::API
  def issue_token(payload)
    JWT.encode(payload, "my_secret_key")
  end

  def decode_token
    begin
      payload = JWT.decode(get_token, "my_secret_key")[0]
    rescue JWT::DecodeError
      nil
    end
  end
  
  def get_token
    token = request.headers["Authorization"].split(" ")[1]
  end
  
  def current_user
    @user = User.find(decode_token["user_id"])
  end

  def logged_in?
    !!current_user
  end
end
