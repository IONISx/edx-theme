'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var config = {
        'static': 'static',
        bower: 'bower_components'
    };

    grunt.initConfig({
        c: config,

        // ## //

        watch: {
            less: {
                files: ['<%= c.static %>/less/**/*.less'],
                tasks: ['less', 'autoprefixer', 'cssmin']
            }
        },

        // ## //

        jshint: {
            options: {
                'curly': true,
                'eqeqeq': true,
                'immed': true,
                'latedef': true,
                'newcap': true,
                'noarg': true,
                'noempty': true,
                'unused': true,
                'undef': true,
                'trailing': true,
                'quotmark': 'single',

                'boss': true,
                'eqnull': true
            },
            browser: {
                options: {
                    'browser': true,
                    'jquery': true
                },
                files: {
                    src: [
                        '<%= c.static %>/js/**/*.js'
                    ]
                }
            },
            node: {
                options: {
                    'node': true
                },
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
                files: [{
                    expand: true,
                    cwd: '<%= c.static %>/less',
                    src: 'main.less',
                    dest: '<%= c.static %>/css',
                    ext: '.css'
                }]
            }
        },

        // ## //

        autoprefixer: {
            theme: {
                files: {
                    '<%= c.static %>/css/main.css': [
                        '<%= c.static %>/css/main.css'
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
                files: {
                    '<%= c.static %>/css/main.css': [
                        '<%= c.static %>/css/main.css'
                    ]
                }
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
                    cwd: '<%= c.static %>/images/',
                    dest: '<%= c.static %>/images/',
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
                    dest: '<%= c.static %>/fonts/font-awesome/',
                    src: [
                        'font-awesome/fonts/*.{otf,eot,svg,ttf,woff}'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'less',
        'autoprefixer',
        'cssmin',
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
        'build'
    ]);
};
