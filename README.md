![Express](http://nodejs-cloud.com/img/128px/expressjs.png)
![Grunt](http://jackandrewread.com/img/skills/grunt.png)
![Bower](http://www.robdudley.com/bower_grunt_yeoman/img/bower-logo.png)
![Angular](http://share.2sic.com/share/Content/2dm-blogs/2014-10%20JS%20MVC/AngularJS-Square-250.png)
![Node.js](https://www.a2hosting.com/images/uploads/landing_images/node.js-hosting.png)

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
- Favicons, IOS and Windows Tile Icons auto-generated.

# TO DO

- Tidy up and verify meta tags, generate startup image for IOS when added to home screen.
- Set up Angular
- Use the Fullscreen API
- Implement behavioural tests (protractor)
- Implement Karma unit tests.
- Implement JSHint for concatentated JS in development mode.
- Verify icons and ability to add to home screen on different devices.


# Let's get started

1. Install dependencies ( --save writes to add dependencies to package.json )

    > npm install
    
    > npm install -g bower
    
    > npm install -g grunt-cli

    > brew install ImageMagick (OSX) 
    
    > apt-get install imagemagick (Ubuntu)
    
    > apt-get install graphicsmagick-imagemagick-compat

    > bower install (load frontend dependencies)

2. Let's create our build

    > grunt

3. Run the project

This project runs on port 3004 for development purposes but feel free to change it for your own purposes (server.js)

    > grunt serve
    
Debugger port: 5858




