require 'rubygems'
require 'sinatra'
set :server, %w[webrick thin mongrel ]
 
root_dir = File.dirname(__FILE__)
 
set :environment, :development
set :root, root_dir
set :app_file, File.join(root_dir, 'etorki.rb')
disable :run
 
require 'etorki'
 
run Sinatra::Application