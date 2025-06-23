class ProductsController < ApplicationController
  skip_before_action :authenticate_request, only: [ :index ]
  before_action :verify_superuser_request, except: [ :index ]

  def index
    render json: { products: Product.all }
  end

  def create
    if Product.create!(product_params)
      render json: { message: "Product has been created" }
    else
      render json: { message: "A error occurred" }
    end
  end

  def destroy
    product = Product.find(params[:id])

    if product.destroy
      render json: { message: "Product deleted" }
    end
  end

  def update
    product = Product.find(params[:id])

    if product.update(product_params)
      render json: { message: "Product updated" }
    end
  end

  def getupdate
    product = Product.find(params[:id])

    if product
      render json: { product: product }, status: :ok
    else
      render json: { error: "Produto não encontrado" }, status: :not_found
    end
  end


  private

  def product_params
    params.require(:product).permit(:id, :image, :name, :price, :description, :sizes)
  end
end
