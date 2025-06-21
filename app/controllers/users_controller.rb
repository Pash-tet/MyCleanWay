class UsersController < ApplicationController
  allow_unauthenticated_access only: %i[new create]

  helper_method :resource_user

  def new
  end

  def create
    if resource_user.save
      redirect_to new_session_path, alert: "User created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    if action_name == "create"
      params.require(:user).permit(:name, :password, :password_confirmation)
    else
      { name: "", password: "", password_confirmation: "" }
    end
  end

  def resource_user
    @resource_user ||= User.new(user_params)
  end
end
