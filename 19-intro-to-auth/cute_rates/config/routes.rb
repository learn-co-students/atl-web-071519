Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'example#testing'

  get '/login', to: 'auth#new'
  post '/login', to: 'auth#create'
  delete '/login', to: 'auth#logout'

  resources :pets
  resources :people, only: [:show, :index, :new, :create]
end
