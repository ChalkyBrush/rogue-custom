class ShoesController < ApplicationController
  def customize
    @shoe = Shoe.new params[:shoe]
  end
end
