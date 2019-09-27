class Api::V1::UsersController < ApplicationController
  def profile
    render json: current_user 
  end

  # signup
  def create
    @user = User.create(user_params)
    if @user.valid?
      token = JWT.encode({ user_id: @user.id }, "my_secret_key")
      render json: { user: @user, jwt: token }, status: :created
    else
      render json: { message: "you played yourself, couldn't signup" }, status: :not_acceptable
    end
  end

  private 
  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end
