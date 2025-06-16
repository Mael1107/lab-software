class ApplicationController < ActionController::API
  before_action :authenticate_request

  private
  
  def authenticate_request
    header = request.headers["Authorization"]
    header = header.split(" ").last if header
    begin
      @decoded = JWT.decode(header, 'devScratch', true, { algorithm: "HS256"})
      @current_user = User.find(@decoded[0]["user_id"])
    rescue JWT::DecodeError => e
      render json: { error: e.message }, status: :unauthorized
    end
  end
end
