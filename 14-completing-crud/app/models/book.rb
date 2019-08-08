class Book < ActiveRecord::Base
  belongs_to :author
  
  validates :title, presence: true
  validates :snippet, presence: true, length: { minimum: 40, maximum: 200 }
end
