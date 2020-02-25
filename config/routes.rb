Rails.application.routes.draw do
  root "portfolios#index"
  get "portfolios/sample", to: "portfolios#sample"
end
