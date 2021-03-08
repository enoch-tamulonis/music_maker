class Project < ApplicationRecord
  validates :title, presence: true
  has_one_attached :banner_image
end
