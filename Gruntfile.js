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
                files: {
                    src: [
                        '<%= c.static %>/js/**/*.js'
                    ]
                },
                options: {
                    'browser': true,
                    'jquery': true
                }
            },
            node: {
                files: {
                    src: [
                        'Gruntfile.js'
                    ]
                },
                options: {
                    'node': true
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

    grunt.registerTask('build', [
        'less',
        'autoprefixer',
        'cssmin'
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
