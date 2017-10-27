Rails.application.routes.draw do

  resources :items
	post 'authenticate', to: 'authentication#authenticate'

	namespace :api do
	    resources :items
	  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
