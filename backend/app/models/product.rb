class Product < ApplicationRecord
  validates :image, presence:true
  validates :name, presence:true
  validates :price, presence:true
  validates :description, presence:true
  validates :sizes, presence:true
end