class AddSlugToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :slug, :string
  end
end
