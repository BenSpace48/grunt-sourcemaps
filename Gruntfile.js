/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Task configuration.

    // JShint will go through the specified file(s) to ensure there are no errors and best practice is followed.
    //The options can be set below. Full list of settings found on https://github.com/gruntjs/grunt-contrib-jshint
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

      // Specify the directory/file(s) you want to be checked
      gruntfile: {
        src: ['Gruntfile.js']
      },
    },

    // Compass options, this includes 2 different profiles:
    // Dist (distribution) for deployment which compresses files, disables sourcemaps and forces a full compile
    // dev (development) which enables sourcemaps and expands the compiled CSS
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

    // The watch task, this is where you specify what files you want to watch and what task to run when one of those files change.
    watch: {
        // When this gruntfile.js is altered the jshint task will run to check for errors
        gruntfile: {
            files: '<%= jshint.gruntfile.src %>',
            tasks: ['jshint:gruntfile']
        },
        // When any scss files change in the stated directories the compass:dev task will run
        compass: {
            files: ['scss/*.scss', 'scss/**/*.scss'],
            tasks: ['compass:dev']
        },
        // When any css files change the run task will tell the browser to refresh the page if livereload is enabled in the browser
        livereload: {
            files: ['css/*.css', 'css/**/*.css'],
                options: {
                    livereload: true
                }
        }
    }
  });

  // Load the required plugins.

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // State the name of the task and which tasks you would like to run.
  // So to run grunt.registerTask('deploy', ['compass:dist']); you would just need to run 'grunt deploy' in the command line. To run the default task you simply need to run 'grunt'.
  grunt.registerTask('default', ['jshint', 'compass:dev', 'watch']);
  grunt.registerTask('deploy', ['compass:dist']);

};
