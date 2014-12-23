/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Variables - You can call them with the following <%= project.sassDir %>, replacing sassDir with the variable.
    project: {
        sassDir: 'scss',
        cssDir: 'css',
        jsDir: 'js'
    },

    // JShint will go through the specified file(s) to ensure there are no errors and best practice is followed. The options can be set below. Full list of settings found on https://github.com/gruntjs/grunt-contrib-jshint
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
    // For more options/info - https://github.com/gruntjs/grunt-contrib-compass
    compass: {
        dist: {
            options: {
                sourcemap: false,
                sassDir: '<%= project.sassDir %>',
                cssDir: '<%= project.cssDir %>',
                environment: 'production',
                outputStyle: 'compressed',
                force: true
            }
        },
        dev: {
            options: {
                sourcemap: true,
                sassDir: '<%= project.sassDir %>',
                cssDir: '<%= project.cssDir %>',
                environment: 'development',
                outputStyle: 'expanded'
            }
        },
        force: {
            options: {
                sourcemap: true,
                environment: 'development',
                outputStyle: 'expanded',
                force: true
            }
        }
    },

    // The watch task, this is where you specify what files you want to watch and what task to run when one of those files change.
    // For more options/info - https://github.com/gruntjs/grunt-contrib-watch
    watch: {
        options: {
            livereload: true,
            spawn: false // Increases speed but can increase the chance of grunt failing, remove this line if you get errors.
        },
        gruntfile: {
            files: ['<%= jshint.gruntfile.src %>'],
            tasks: ['jshint:gruntfile']
        },
        compass: {
            files: ['<%= project.sassDir %>/*.scss', '<%= project.sassDir %>/**/*.scss'],
            tasks: ['compass:dev']
        },
        livereload: {
            files: ['<%= project.cssDir %>/*.css', '<%= project.cssDir %>/**/*.css'],
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
