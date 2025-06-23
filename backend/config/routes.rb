Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  root "products#index"

  post "user/register", to: "users#create"
  post "user/login", to: "users#login"
  put "user/update", to: "users#update"
  delete "user/delete", to: "users#destroy"

  get "admins/user/:name", to: "admins#check_super"

  get "admins/user/", to: "admins#user_index"
  get "admins/user/update/:id", to: "admins#getupdate"
  put "admins/user/update/:id", to: "admins#update"
  delete "admins/user/delete/:id", to: "admins#destroy"
  post "admins/product/register", to: "products#create"
  get "admins/product/update/:id", to: "products#getupdate"
  put "admins/product/update/:id", to: "products#update"
  delete "admins/product/delete/:id", to: "products#destroy"

  post "product/register", to: "products#create"
end
