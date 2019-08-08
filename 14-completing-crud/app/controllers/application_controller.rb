class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  def initialize
    puts ">>> Building a new AppController to answer request: #{self}\n\n\n"
    super
  end

  get '/' do
    erb :homepage
  end
end
