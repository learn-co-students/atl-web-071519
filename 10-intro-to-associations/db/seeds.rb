Comment.destroy_all
Post.destroy_all
User.destroy_all

brit = User.create(username: "kingcons")
kaeland = User.create(username: "quiet k")
will = User.create(username: "big will")

first = Post.create(
  title: "New Day, New Blog",
  content: "It's Monday and I'm still asleep. Please send help.",
  user_id: brit.id
)

partitioning = Post.create(
  title: "Learning to Linux",
  content: "How does hard drive partitioning work? Hope I don't break my pc lulz",
  user_id: will.id
)

Comment.create(
  post_id: partitioning.id,
  user_id: brit.id,
  content: "BE CAREFUL! And maybe just try out linux in a virtual machine like Virtualbox first."
)

Comment.create(
  content: "Will, you should check out Ubuntu...",
  user_id: kaeland.id,
  post_id: partitioning.id
)

partitioning.comments.create(
  content: "Will, you should check out Ubuntu. It's pretty great.",
  user_id: kaeland.id
)

# brit.posts.create(
#   title: "Time for Lunch!",
#   content: "Did you enjoy this lecture? Boy, I hope so."
# )
