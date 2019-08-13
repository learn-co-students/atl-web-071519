class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def new
  end

  def create
    @student = Student.create(student_params)
    redirect_to students_path
  end

  private

  def student_params
    params.permit(:name, :cohort_id)
  end
end
