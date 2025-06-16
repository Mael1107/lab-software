class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [ :login, :create ]
  # before_action :verify_superuser_request, only: [ :destroy ]

  def create
    if User.create!(user_params)
      render json: { message: "User has been created" }
    else
      render json: { message: "A error occurred"}
    end
  end

  def login
    user = User.find_by(name: user_params[:name])

    if user && user.authenticate(user_params[:password])
      token = JWT.encode({ user_id: user.id }, 'devScratch', "HS256")
      render json: { token: token }
    else
      render json: { message: "Invalid login"}, status: :unauthorized
    end 
  end

  def destroy
    user = User.find(id: user_params[:id])


  end


  # def destroy
  #   user = User.find(id: user_params[:id])

  #   if @current_user.name == user.name
  #     user.destroy
  #   elsif @current_user.is_super
  #     user.destroy
  #   else
  #     render json: { error: "Can't proceed with this action" }
  #   end
  # end


  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :cpf, :number, :is_super)
  end
end



