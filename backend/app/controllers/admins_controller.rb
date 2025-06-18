class AdminsController < UsersController && ApplicationController
  before_action :verify_superuser_request

  def user_index
    render json: { users: User.all }
  end

  def update
    user = User.find(user_params[:id])
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

  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :password, :cpf, :number, :is_super)
  end
end