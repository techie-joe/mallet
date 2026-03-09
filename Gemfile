# frozen_string_literal: true

source "https://rubygems.org"

# This gem inherits the GitHub Pages environment
gem "github-pages", group: :jekyll_plugins

# Required for Faraday 2.0+ (used by jekyll-remote-theme)
gem "faraday-retry"

# Performance fix for Windows file watching
platforms :windows do
  gem "wdm", ">= 0.1.0"
end

gemspec