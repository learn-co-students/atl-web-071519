class Student < ApplicationRecord
  belongs_to :cohort

  validates :name, presence: true, uniqueness: true
end
