require 'pry'
require_relative 'user'
require_relative 'tweet'
require_relative 'like'

brit = User.new('king_cons', 'Programmer Archaeologist, Sheik Scrub, etc')
shivang = User.new('shivang', 'thinking about ML all day long')

t1 = Tweet.new(brit, "i already loved blocks and yield, now i've got objects? 💪")

brit.post_tweet('man, ruby is a pretty cool language actually')
shivang.post_tweet("when are class variables good tho?")

l1 = brit.like_tweet(shivang.tweets.first)
l2 = shivang.like_tweet(t1)

# l1 = Like.new(shivang, t1)
# l2 = Like.new(brit, shivang.tweets.first)

binding.pry