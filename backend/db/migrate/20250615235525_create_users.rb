class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :email
      t.string :cpf
      t.string :number
      t.boolean :is_super

      t.timestamps
    end
  end
end
