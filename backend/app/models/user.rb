class User < ApplicationRecord
  has_secure_password

  validates :name, presence:true
  validates :email, presence:true
  validates :password, presence:true
  validates :cpf, presence:true
  validates :is_super, presence:true
end
