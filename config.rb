###
# Blog settings
###

Time.zone = "EET"

activate :blog do |blog|
  # blog.prefix = "blog"
  blog.permalink = ":title/"
  blog.sources = "posts/:year-:month-:day-:title.html"
  # blog.taglink = "tags/:tag.html"
  blog.layout = "layouts/old-post"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  # blog.default_extension = ".markdown"

  #blog.tag_template = "tag.html"
  #blog.calendar_template = "calendar.html"

  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/:num"
end

page "/feed.xml", :layout => false

### 
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
# 
# With no layout
# page "/path/to/file.html", :layout => false
# 
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
# 
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

helpers do

  def ie_tag(name=:body, attrs={}, &block)
    attrs.symbolize_keys!
    haml_concat("<!--[if lt IE 7]> #{ tag(name, add_class('ie6 oldie', attrs)) } <![endif]-->")
    haml_concat("<!--[if IE 7]>    #{ tag(name, add_class('ie7 oldie', attrs)) } <![endif]-->")
    haml_concat("<!--[if IE 8]>    #{ tag(name, add_class('ie8 oldie', attrs)) } <![endif]-->")
    haml_concat("<!--[if gt IE 8]><!-->")
    haml_tag name, attrs do
      haml_concat("<!--<![endif]-->")
      block.call
    end
  end

  def ie_html(attrs={}, &block)
    ie_tag(:html, attrs, &block)
  end

  def add_class(name, attrs)
    classes = attrs[:class] || ''
    classes.strip!
    classes = ' ' + classes if !classes.blank?
    classes = name + classes
    attrs.merge(:class => classes)
  end
  
end


# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :markdown_engine, :kramdown
set :markdown, :fenced_code_blocks => true,
               :autolink => true, 
               :smartypants => true

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  
  # Minify Javascript on build
  activate :minify_javascript
  
  # Enable cache buster
  activate :cache_buster
  
  # Use relative URLs
  # activate :relative_assets
  
  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end
