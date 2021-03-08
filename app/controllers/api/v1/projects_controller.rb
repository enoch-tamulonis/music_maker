class Api::V1::ProjectsController < ApplicationController
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
    @project ||= Project.find(params[:id])
  end
end
