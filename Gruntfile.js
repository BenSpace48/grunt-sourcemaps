/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },

    compass: {
        dist: {
            options: {
                sourcemap: false,
                sassDir: 'scss',
                cssDir: 'css',
                environment: 'production',
                outputStyle: 'compressed',
                force: true
            }
        },
        dev: {
            options: {
                sourcemap: true,
                sassDir: 'scss',
                cssDir: 'css',
                environment: 'development',
                outputStyle: 'expanded'
            }
        }
    },

    watch: {
        gruntfile: {
            files: '<%= jshint.gruntfile.src %>',
            tasks: ['jshint:gruntfile']
        },
        compass: {
            files: ['scss/*.scss', 'scss/**/*.scss'],
            tasks: ['compass:dev']
        },
        livereload: {
            files: ['css/*.css', 'css/**/*.css'],
                options: {
                    livereload: true
                }
        }
    }
  });

  // These plugins provide necessary tasks.

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'compass:dev', 'watch']);
  grunt.registerTask('deploy', ['compass:dist']);

};
