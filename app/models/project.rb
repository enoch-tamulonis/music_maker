class Project < ApplicationRecord
  validates :title, presence: true
  has_one_attached :banner_image
  before_save :set_slug
  
  private

  def set_slug
    self.slug = title.parameterize
  end
end
