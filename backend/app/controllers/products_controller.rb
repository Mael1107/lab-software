class ProductsController < ApplicationController
  before_action :authenticate_request

  def create
    render json: { message: "Deu bom"}
  end
end




