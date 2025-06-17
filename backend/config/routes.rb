Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"


  post "user/register", to: "users#create"
  post "user/login", to: "users#login"
  post "user/update", to: "users#update"
  post "user/delete", to: "users#destroy"

  post "admins/user/update", to: "admins#update" 
  post "admins/user/delete", to: "admins#destroy"
  post "admins/product/register", to: "products#create"
  post "admins/product/update", to: "products#update"
  post "admins/product/delete", to: "products#destroy"

  post "product/register", to: "products#create"
end
