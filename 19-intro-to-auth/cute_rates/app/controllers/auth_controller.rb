class AuthController < ApplicationController
  def new
  end

  def create
    @person = Person.find_by(username: params[:username])
    if @person && @person.password == params[:password]
      # cookies[:user_id]
      session[:user_id] = @person.id
      redirect_to pets_path
    else
      @error = "Incorrect username or password."
      render :new
    end
  end

  def destroy
  end
end