class Account < ApplicationRecord
  validates %i[ name password email cpf is_super ], presence: true
  validates :email, email: true
  validates :password, confirmation: true
end
