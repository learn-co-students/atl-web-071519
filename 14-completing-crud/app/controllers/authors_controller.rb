class AuthorsController < Sinatra::Base
  set :views, 'app/views/authors'
  
  get '/authors' do
    @authors = Author.all
    erb :index
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
    erb :new
  end

end