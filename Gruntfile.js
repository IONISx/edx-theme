'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
                tasks: ['less', 'autoprefixer']
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
                files: {
                    src: [
                    ]
                },
                options: {
                    'browser': true,
                    'jquery': true,
                    'globals': {
                        'smoothScroll': true
                    }
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
        }
    });

    grunt.registerTask('default', function () {
        grunt.option('force', true);

        grunt.task.run([
            'less',
            'autoprefixer',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'jshint:browser',
        'less',
        'autoprefixer',
        'cssmin'
    ]);
};
