class CreateProducts < ActiveRecord::Migration[8.0]
  def change
    create_table :products do |t|
      t.string :image
      t.string :name
      t.float :price
      t.string :description
      t.string :sizes

      t.timestamps
    end
  end
end
