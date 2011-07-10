# Get ready to kick ass.
require 'sinatra'
require 'haml'
require 'sass'

get '/' do
	haml :index
end

get '/stylesheets/:name.css' do
 content_type 'text/css', :charset => 'utf-8'
 scss(:"stylesheets/#{params[:name]}")
end
