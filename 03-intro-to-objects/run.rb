require 'pry'
require_relative 'account'

puts 'Good Morning!'

# account1 = { owner: 'brit', balance: 300 }
# account2 = { owner: 'maddie', balanc: 1200000 }

account1 = Account.new("brit", 300)
account2 = Account.new("maddie", 99999999)

puts account1.same_owner?(account2)
puts account2.same_owner?(account2)
