module.exports = function(grunt) {

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['src/*.html'],
                tasks: ['htmlmin:dev'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/css/*.scss'],
                tasks: ['concat:css', 'sass'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: [
                    "src/js/*/*.js",
                ],
                tasks: ['concat:js'],
                options: {
                    spawn: false
                }
            },
            img: {
                files: [
                    "src/img/**.{jpg,gif,png,ico}",
                ],
                tasks: ['newer:imagemin:dynamic'],
                options: {
                    spawn: false
                }
            }
        },
        favicons: {
            options: {
                trueColor: true,
                precomposed: true,
                appleTouchBackgroundColor: "#e2b2c2",
                coast: true,
                windowsTile: true,
                tileBlackWhite: false,
                tileColor: "auto",
                html: 'public/index.html',
                HTMLPrefix: "img/icons/"
            },
            icons: {
                src: 'src/img/logo-small.png',
                dest: 'public/img'
            }
        },
        concat: {
            css: {
                src: [
                    "src/css/app.scss",
                ],
                dest: 'src/css/production.scss'
            },
            js: {
                src: [
                    "bower_components/jquery/dist/jquery.min.js",
                    "bower_components/angular/angular.min.js",
                    "bower_components/angular-sanitize/angular-sanitize.min.js",
                    "src/js/app.js",
                    "src/js/services.js",
                    "src/js/common/*.js",
                    "src/js/controllers/*.js",
                    "src/js/directives/*.js",
                    "src/js/factories/*.js",
                    "src/js/filters/*.js",
                    "src/js/services/*.js"
                ],
                dest: 'public/js/production.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded' // 'compressed'
                },
                files: {
                    'public/css/production.css': 'src/css/production.scss'
                }
            }
        },
        autoprefixer: {
            css: {
                files: {
                    'public/css/production.css': 'public/css/production.css'
                }
            }
        },
        htmlmin: {
            prod: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/index.html': 'src/index.html',
                    'public/getstarted.html': 'src/getstarted.html'
                }
            },
            dev: {
                files: {
                    'public/index.html': 'src/index.html',
                    'public/getstarted.html': 'src/getstarted.html'
                }
            }
        },
        cssmin: {
            css: {
                src: 'src/css/production.css',
                dest: 'public/css/production.css'
            }
        },
        uglify: {
            js: {
                options: {
                    mangle: false
                },
                src: 'public/js/production.js',
                dest: 'public/js/production.js'
            }
        },
        responsive_images: {
            logo: {
              options: {
                sizes: [{
                  name: "small",
                  width: 70,
                  height: 54
              }]
              },
              files: [{
                expand: true,
                src: ['logo.png'],
                cwd: 'src/img', 
                dest: 'src/img'
              }]
            }   
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['*.{png,jpg,gif,ico}'],
                    dest: 'public/img/'
                }]
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            dist: {
                files: {
                    'public/img/icons/svg/app.svg': 'src/img/icons/svg/*.svg'
                }
            }
        },
        notify: {
            task_name: {
                options: {
                    // Task-specific options go here.
                }
            },
            watch: {
                options: {
                    title: 'Build Complete',
                    message: 'The build has finished running',
                    duration: 3
                }
            },
            server: {
                options: {
                    title: 'Scaffold',  // optional
                    message: 'Build is ready!',
                    duration: 3
                }
            }
        },
        autoshot: {
            default_options: {
                options: {
                    // necessary config
                    path: "src/img/screenshots",
                    // optional config, must set either remote or local
                    remote: {
                        files: [
                            { src: "http://www.google.com", dest: "google.png", delay: 3000 },
                        ]
                    },
                    viewport: ['1024x768', '1920x1080']
                }
            }
        },
        manifest: {
            generate: {
                options: {
                    basePath: '',
                    network: ['http://*', 'https://*'],
                    fallback: ['/ /offline.html'],
                    exclude: [''],
                    preferOnline: true,
                    verbose: true,
                    timestamp: true,
                    hash: true
                },
                src: [
                    'public/*.html',
                    'public/js/*.js',
                    'public/css/*.css',
                    'public/img/*.png'
                ],
                dest: 'public/manifest.appcache'
            }
        },
        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            mobile: {
                options: {
                    url: "http://localhost:3004",
                    locale: "en_GB",
                    strategy: "mobile",
                    threshold: 80
                }
            },
            desktop: {
                options: {
                    paths: ["http://localhost:3004"],
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js',

                    // Setting to `false` will effectively just run `node path/to/server.js`
                    background: true,

                    // Called when the spawned server throws errors
                    fallback: function() {

                    },

                    port: 3004,

                    // Set --debug
                    debug: true
                }
            },
            prod: {
                options: {
                    script: 'server.production.js',

                    // Setting to `false` will effectively just run `node path/to/server.js`
                    background: true,

                    // Called when the spawned server throws errors
                    fallback: function() {

                    },

                    port: 80,

                    // Set --debug
                    debug: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-favicons');

    grunt.registerTask('default', ['htmlmin:dev', 'concat', 'sass', 'autoprefixer:css', 'responsive_images' , 'newer:imagemin:dynamic', 'manifest:generate', 'notify:server', 'favicons']);
    grunt.registerTask('production', ['htmlmin:prod', 'concat', 'sass', 'autoprefixer:css', 'uglify', 'responsive_images', 'cssmin', 'newer:imagemin:dynamic','manifest:generate', 'notify:server']);
    grunt.registerTask('serve', ['express:dev', 'watch']);
    grunt.registerTask('serve:production', ['express:dev']);
    grunt.registerTask('page-test', ['pagespeed']);
    grunt.registerTask('test', []);

};
