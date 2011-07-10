# Get ready to kick ass.
require 'rubygems'
require 'sinatra'
require 'Haml'
require 'sass'

get '/' do
	haml :index
end

get '/stylesheets/:name.css' do
 content_type 'text/css', :charset => 'utf-8'
 scss(:"stylesheets/#{params[:name]}")
end