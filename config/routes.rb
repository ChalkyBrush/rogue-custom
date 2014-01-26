Rogue::Application.routes.draw do
  get 'shoes/customize' => 'shoes#customize'
  resources :shoes
end
