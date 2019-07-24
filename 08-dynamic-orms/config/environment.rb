require 'bundler'
Bundler.require

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/basic_orm'
require_relative '../lib/tweet'
require_relative '../lib/user'
require_relative '../lib/tweets_app'
