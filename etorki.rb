require 'rubygems'
require 'sinatra'
 
set :public, File.dirname(__FILE__) + '/'
 
get '/' do
  redirect '/comments.html'
end
