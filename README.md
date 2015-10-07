# Scaffold

A Node.js and Grunt boilerplate that focuses on automating many frontend tasks that optimize your application development, performance and user experience.

# Features

- Auto generated manifest file
- Asset concatenation and minification
- HTML minification for production builds if required.
- SASS
- Automatic CSS prefixing for browser compatibility
- Auto-generated favicons, IOS icons, Win 8 tiles.
- Further compression of assets using express in gzip format
- Development and production builds with a watcher to kick off builds when changes are made in development
- Native notification when builds are completed.
- Builds run against pagespeed for feedback on app performance

# TO DO

- Generated images.
- Tidy up and verify meta tags, generate startup image for IOS when added to home screen.
- Set up Angular
- Use the Fullscreen API
- Implement behavioural tests (protractor)
- Implement Karma unit tests.
- Implement JSHint for concatentated JS in development mode.
- Verify icons and ability to add to home screen on different devices.


# Let's get started

1. Install dependencies (--save writes to add dependencies to package.json)

    > npm install
    > npm install -g bower
    > npm install -g grunt

    > brew install ImageMagick (OSX) 
    
    > apt-get install imagemagick (Ubuntu)
    > apt-get install graphicsmagick-imagemagick-compat

    > bower install (load frontend dependencies)

2. Let's create our build

    > grunt

3. Run the project

This project runs on port 3000 for development purposes but feel free to change it for your own purposes (server.js)

    > grunt serve

# Generated Images

The following images will be generated from src/logo.png and can be customized / removed depending on the needs of your project.

public/favicon.png
public/logo-small.png
public/apple-touch-icon-152x152-precomposed.png
public/apple-touch-icon-144x144-precomposed.png
public/apple-touch-icon-120x120-precomposed.png
public/apple-touch-icon-114x114-precomposed.png
public/apple-touch-icon-76x76-precomposed.png
public/apple-touch-icon-72x72-precomposed.png
public/apple-touch-icon-60x60-precomposed.png
public/apple-touch-icon.png
public/windows-tile-150x150-precomposed.png
public/windows-tile-144x144-precomposed.png
public/windows-tile-310x310-precomposed.png
public/windows-tile-70x70-precomposed.png




