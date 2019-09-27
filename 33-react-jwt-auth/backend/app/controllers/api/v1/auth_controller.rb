class Api::V1::AuthController < ApplicationController

  # This controller is for handling Login...

  def create
    @user = User.find_by(username: user_login_params[:username])
    if @user && @user.authenticate(user_login_params[:password]) 
      token = JWT.encode({ user_id: @user.id }, "my_secret_key")
      render json: { user: @user, jwt: token }, status: :accepted
    else
      render json: { message: "Yo, you played yaself, yet again! Stop-it." }, status: :unauthorized
    end
  end

  private
  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
