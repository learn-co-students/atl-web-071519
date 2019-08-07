class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  def initialize
    puts ">>> Building a new AppController to answer request: #{self}\n\n\n"
    super
  end

  get '/' do
    erb :homepage
  end

  get '/authors' do
    @authors = Author.all
    erb :authors
  end

  post '/authors' do
    @author = Author.create(full_name: params[:full_name])
    params[:books].each do |options|
      @author.books.create(options)
      # options = book.merge(author_id: @author.id)
      # @book = Book.create(options)
    end
    redirect '/books'
  end

  get '/authors/new' do
    erb :new_author
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
