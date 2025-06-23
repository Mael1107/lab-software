class AdminsController < UsersController && ApplicationController
  before_action :verify_superuser_request

  def user_index
    render json: { users: User.all }
  end

  def update
    user = User.find(params[:id])
    if !(user_params[:password])
      if user.update_columns(name: user_params[:name], email: user_params[:email], cpf: user_params[:cpf], number: user_params[:number], is_super: user_params[:is_super])
        render json: { message: "User updated" }
      end
    else
      if user.update(user_params)
        render json: { message: "User updated" }
      end
    end
  end

  def getupdate
    user = User.find(params[:id])

    if user
      render json: { user: user }, status: :ok
    else
      render json: { error: "Usuário não encontrado" }, status: :not_found
    end
  end

  def destroy
    user = User.find(params[:id])
    if user.destroy
      render json: { message: "User deleted" }
    end
  end

  def check_super
    user = User.find_by(name: params[:name])
    if user
      render json: { is_super: user.is_super }
    else
      render json: { error: "Usuário não encontrado" }, status: :not_found
    end
  end


  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :password, :cpf, :number, :is_super)
  end
end
