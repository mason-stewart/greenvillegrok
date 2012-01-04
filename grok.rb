# Get ready to kick ass.
require 'sinatra'
require 'haml'
require 'sass'
require 'compass'

configure do
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.config'))
end

configure :production do
  require 'newrelic_rpm'
end

get '/' do
  haml :index
end

get '/stylesheets/:name.css' do
  content_type 'text/css', :charset => 'utf-8'
  scss(:"stylesheets/#{params[:name]}", Compass.sass_engine_options )
end