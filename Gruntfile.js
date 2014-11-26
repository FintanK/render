module.exports = function(grunt) {

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // watch assets, concatenate files compile Sass
        clean: {

        },
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
                    "src/js/app.js",
                    "src/js/services.js",
                    "src/js/controllers.js",
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
                    "src/js/app.js",
                    "src/js/services.js",
                    "src/js/controllers.js",
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
        favicons: {
            options: {},
            icons: {
                src: 'src/img/logo.png',
                dest: 'public/img'
            }
        },
        spritesheet: {
            generate: {

                // An array of filename / source images array pairs. The basename of the sprite file
                // is also prefixed to the CSS classes.
                sprites: {
                    "public/img/sprite.png": ['src/images/icons/png/*.png']
                },

                // The destination for the build stylesheet
                sheet: "public/css/sprites.css"
            }
        },
        webp: {
            files: {
                //expand: true,
                //cwd: 'path/to/source/images',
                src: 'src/img/*.png',
                dest: 'public/img/'
            },
            options: {
                binpath: require('webp-bin').path,
                preset: 'photo',
                verbose: true,
                quality: 80,
                alphaQuality: 80,
                compressionMethod: 6,
                segments: 4,
                psnr: 42,
                sns: 50,
                filterStrength: 40,
                filterSharpness: 3,
                simpleFilter: true,
                partitionLimit: 50,
                analysisPass: 6,
                multiThreading: true,
                lowMemory: false,
                alphaMethod: 0,
                alphaFilter: 'best',
                alphaCleanup: true,
                noAlpha: false,
                lossless: false
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
                    title: 'Render',  // optional
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
                },
            },
        },
        manifest: {
            generate: {
                options: {
                    basePath: '',
                    cache: ['public/js/app.js', 'public/css/app.css','public/css/*.html', 'public/img/*.png'],
                    network: ['http://*', 'https://*'],
                    fallback: ['/ /offline.html'],
                    exclude: ['js/jquery.min.js'],
                    preferOnline: true,
                    verbose: true,
                    timestamp: true,
                    hash: true,
                    master: ['public/index.html']
                },
                src: [
                    'some_files/*.html',
                    'js/*.min.js',
                    'css/*.css'
                ],
                dest: 'manifest.appcache'
            }
        },
        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            mobile: {
                options: {
                    url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            },
            desktop: {
                options: {
                    paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
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
    grunt.loadNpmTasks('grunt-spritesheet');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-webp');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-favicons');

    grunt.registerTask('default', ['htmlmin:dev', 'concat', 'sass', 'autoprefixer:css', 'uglify', 'favicons:icons', 'spritesheet:generate', 'newer:imagemin:dynamic','notify:server']);
    grunt.registerTask('build', ['htmlmin:prod', 'concat', 'sass', 'autoprefixer:css', 'uglify', 'favicons:icons', 'spritesheet:generate', 'cssmin', 'newer:imagemin:dynamic','manifest:generate', 'notify:server', 'pagespeed:mobile', 'pagespeed:desktop']);
    grunt.registerTask('serve', ['express:dev', 'watch']);
    grunt.registerTask('serve:production', ['express:dev']);
    grunt.registerTask('test', []);

};
