class RemoveAccountsTable < ActiveRecord::Migration[8.0]
  def change
    drop_table :accounts
  end
end
