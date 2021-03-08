class Api::V1::ProjectsController < ApplicationController
  require 'pry'

  def index
    projects = Project.all
    render json: projects
  end

  def create
    project = Project.create!(project_params)
    if project
      render json: project
    else
      render json: project.errors
    end
  end

  def show
    binding.pry
    if project
      render json: project
    else
      render json: project.errors
    end
  end

  def destroy
    project&.destroy
    render json: { message: 'Project deleted!'}
  end

  private

  def project_params
    params.permit(:title, :banner_image)
  end

  def project
    @project ||= Project.find_by_slug(params[:slug])
  end
end
