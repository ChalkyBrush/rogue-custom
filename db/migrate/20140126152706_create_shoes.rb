class CreateShoes < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.string :sole
      t.string :laces
      t.string :piece1
      t.string :piece2
      t.string :piece3
      t.string :piece4
      t.integer :order_id
      t.timestamps
    end
  end
end
