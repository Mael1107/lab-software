class UsersController < ApplicationController
  
  skip_before_action :authenticate_request, only: [ :login, :create ]

  def create
    if User.create!(user_params)
      render json: { message: "User has been created" }
    else
      render json: { message: "A error occurred"}
    end
  end

  def login
    user = User.find_by(email: user_params[:email])

    if user && user.authenticate(user_params[:password])
      token = JWT.encode({ user_id: user.id }, 'devScratch', "HS256")
      render json: { token: token, user: user.name }
    else
      render json: { message: "Invalid login"}, status: :unauthorized
    end 
  end

  def destroy
    if @current_user.destroy
      render json: { message: 'User deleted'}
    end
  end

  def update
    if @current_user.update(user_params)
      render json: { message: "User updated"}
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:id, :name, :email, :password, :cpf, :number, :is_super)
  end
end