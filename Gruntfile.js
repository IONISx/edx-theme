'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var config = {
        src: 'src',
        dest: 'static',
        bower: 'bower_components'
    };

    grunt.initConfig({
        c: config,

        // ## //

        watch: {
            less: {
                files: ['<%= c.src %>/less/**/*.less'],
                tasks: ['less', 'autoprefixer', 'cssmin', 'bless']
            }
        },

        // ## //

        jshint: {
            node: {
                options: {
                    jshintrc: true
                },
                files: {
                    src: [
                        'Gruntfile.js'
                    ]
                }
            }
        },

        // ## //

        jscs: {
            all: {
                files: {
                    src: [
                        'Gruntfile.js'
                    ]
                }
            }
        },

        // ## //

        less: {
            theme: {
                options: {
                    paths: ['<%= c.bower %>']
                },
                files: {
                    '<%= c.dest %>/css/bundle.css': '<%= c.src %>/less/main.less'
                }
            }
        },

        // ## //

        autoprefixer: {
            theme: {
                options: {
                    browsers: ['last 2 versions', 'ie 9']
                },
                files: {
                    '<%= c.dest %>/css/bundle.css': [
                        '<%= c.dest %>/css/bundle.css'
                    ]
                }
            }
        },

        // ## //

        bless: {
            theme: {
                options: {
                    force: true
                },
                files: {
                    '<%= c.dest %>/css/bundle.css': [
                        '<%= c.dest %>/css/bundle.css'
                    ]
                }
            }
        },

        // ## //

        cssmin: {
            theme: {
                options: {
                    report: 'min'
                },
                files: [{
                    expand: true,
                    cwd: '<%= c.dest %>/css',
                    dest: '<%= c.dest %>/css',
                    src: ['*.css']
                }]
            }
        },

        // ## //

        imagemin: {
            theme: {
                options: {
                    report: 'min'
                },
                files: [{
                    expand: true,
                    cwd: '<%= c.dest %>/images/',
                    dest: '<%= c.dest %>/images/',
                    src: [
                        '**/*.{png,jpg,gif}'
                    ]
                }]
            }
        },

        // ## //

        copy: {
            fontawesome: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: '<%= c.bower %>/',
                    dest: '<%= c.dest %>/fonts/font-awesome/',
                    src: [
                        'font-awesome/fonts/*'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'less',
        'autoprefixer',
        'cssmin',
        'bless',
        'imagemin',
        'copy'
    ]);

    grunt.registerTask('default', function () {
        grunt.option('force', true);

        grunt.task.run([
            'build',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'build'
    ]);
};
