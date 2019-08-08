class BooksController < Sinatra::Base
  set :views, 'app/views/books'
  set :method_override, true

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    @book = Book.new
    erb :new
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  post '/books' do
    @book = Book.new(params)
    if @book.save
      redirect "/books/#{@book.id}"
    else
      erb :new
    end
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.destroy
    redirect "/books"
  end
end