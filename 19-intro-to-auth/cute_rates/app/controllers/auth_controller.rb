class AuthController < ApplicationController
  def new
  end

  def create
    @person = Person.find_by(username: params[:username])
    if @person && @person.authenticate(params[:password])
      # cookies[user_id]
      session[:user_id] = @person.id
      redirect_to pets_path
    else
      flash[:notice] = "Incorrect username or password."
      render :new
    end
  end

  def logout
    session.delete(:user_id)
    flash[:notice] = "You are logged out."
    redirect_to root_path
  end
end