Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'projects/index'
      post 'projects/create'
      get '/show/:id', to: 'projects#show'
      delete '/destroy/:id', to: 'projects#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
