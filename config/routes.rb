Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'projects/index'
      post 'projects/create'
      get '/show/:slug', to: 'projects#show'
      delete '/destroy/:slug', to: 'projects#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
