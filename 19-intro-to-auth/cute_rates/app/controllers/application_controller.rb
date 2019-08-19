class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    user_id = session[:user_id]
    user_id && Person.find(user_id)
  end

  def authorize!
    unless current_user
      flash[:notice] = "You must be logged in to do that."
      redirect_to root_path
    end
  end
end
