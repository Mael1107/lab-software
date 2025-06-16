class AdminsController < UsersController && ApplicationController
  before_action :verify_superuser_request

  def update
    user = User.find_by(id: user_params[:id])
    if user.update(user_params)
      render json: { message: "User updated"}
    end
  end

  def destroy
    user = User.find(user_params[:id])
    if user.destroy
      render json: { message: 'User deleted'}
    end
  end

end