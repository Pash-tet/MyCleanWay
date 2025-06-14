class PagesController < ApplicationController
  def home
    @name = "Pavlentii"
    @sample_list = %w[Doom Half-Life Fallout]

    a = { a: 1 }
  end
end
