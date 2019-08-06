class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  def initialize
    puts ">>> Building a new AppController to answer request: #{self}\n\n\n"
    super
  end

  get '/' do
    erb :homepage
  end

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :new
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  post '/books' do
    @book = Book.create(params)
    redirect "/books/#{@book.id}"
  end
end
