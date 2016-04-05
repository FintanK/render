# Scaffold.js ![](https://travis-ci.org/FintanK/scaffold.svg?branch=master)

Official Website with Documentation: http://scaffoldjs.com

![Website Screenshot](https://github.com/FintanK/scaffold/blob/master/nimbus-image-1458832715049.png)

![Express](http://nodejs-cloud.com/img/128px/expressjs.png)
![Grunt](http://jackandrewread.com/img/skills/grunt.png)
![Bower](http://www.robdudley.com/bower_grunt_yeoman/img/bower-logo.png)
![Angular](http://share.2sic.com/share/Content/2dm-blogs/2014-10%20JS%20MVC/AngularJS-Square-250.png)
![Node.js](https://www.a2hosting.com/images/uploads/landing_images/node.js-hosting.png)

A Node.js and Grunt boilerplate that focuses on automating many frontend tasks that optimize your application development, performance and user experience.

# Features

- Auto generated manifest file
- Asset concatenation and minification
- HTML minification for production builds if required.
- SASS
- Further compression of assets using express in gzip format
- Development and production builds with a watcher to kick off builds when changes are made in development
- Native notification when builds are completed.
- Builds run against pagespeed for feedback on app performance
- Favicons, IOS and Windows 8 Tile Icons auto-generated.

# TO DO

- Introduce Ionic and Electron
- Tidy up and verify meta tags, generate startup image for IOS when added to home screen.
- Set up Angular
- Web Components / Polymer
- Use the Fullscreen API
- Implement behavioural tests (protractor) template
- Implement Karma unit tests.
- Implement JSHint for concatentated JS in development mode.
- Manifest.json
- .manifest file
- Offline first approach
- Add to home screen
- SEO
- Improved documentation.
- Build jobs to allow you to test on different devices in the cloud
- Phonegap build task.
- Splash screen
- Ensure it works on desktop too.
- CLI tool to customize scaffold tools and dependencies.
- Convert to Yeoman generator
- Travis configuration / CI options.

https://developer.lge.com/webOSTV/develop/web-app/getting-started/building-your-first-web-app-webos-tv/
https://developer.mozilla.org/en-US/Marketplace/Options/Packaged_apps
https://developer.chrome.com/apps/about_apps

http://yeoman.io/authoring/
http://code.tutsplus.com/tutorials/build-your-own-yeoman-generator--cms-20040

Then publish NPM module.


# Let's get started

1. Install dependencies ( --save writes to add dependencies to package.json )

Note: You may need to install ruby on your system.

    > gem install sass

    > npm install -g bower

    > npm install -g grunt-cli

    > npm install -g grunt-sass

    > npm install -g node-sass

    > npm install -g grunt

    > npm install

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

Pagespeed
https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fscaffoldjs.com%3A3004%2F&tab=mobile

Mobiready
http://ready.mobi/index.jsp#11510-x1u1
