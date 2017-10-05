
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'assets/css/app.css': 'assets/css/app.scss'
                }
            }
        },
        watch: {
            files: 'assets/css/app.scss',
            tasks: ['sass']
        },
        browserSync: {
            bsFiles: ['*.html', 'assets/css/app.css','assets/js/app.js'],
            options: {
                watchTask: true,
                server: './'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('timer-grunt');

    grunt.registerTask('local', ['sass', 'browserSync', 'watch']);
};