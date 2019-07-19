require 'pry'
require_relative 'user'
require_relative 'tweet'

brit = User.new('king_cons', 'Programmer Archaeologist, Sheik Scrub, etc')
shivang = User.new('shivang', 'thinking about ML all day long')

t1 = Tweet.new(brit, "i already loved blocks and yield, now i've got objects? 💪")

brit.post_tweet('man, ruby is a pretty cool language actually')
shivang.post_tweet("when are class variables good tho?")

binding.pry