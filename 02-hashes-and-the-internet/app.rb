require 'rest-client'
require 'json'
require 'pry'

def greeting
  puts "Welcome to BookSearcher!\n\n"
end

def get_search_term
  puts "Please enter a search term:"
  gets.chomp
end

def search_books(keyword)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{keyword}"
  # request books from server using RestClient
  response = RestClient.get(url)
  # return the hash of results
  results = JSON.parse(response.body)
  results["items"]
end

def show_book(book)
  authors = book['volumeInfo']['authors'].join(", ")
  description = book['volumeInfo']['description']
  if description.length > 200
    description = description[0..200] + " ..."
  end
  puts "\n===============\n"
  puts "Title: #{book['volumeInfo']['title']}"
  puts "Authors: #{authors}"
  puts "Description: #{description}"
  puts "\n\n"
end

def display_results(books)
  books.each do |book_info|
    show_book(book_info)
  end
end

greeting
query = get_search_term
books = search_books(query)
display_results(books)
