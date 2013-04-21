module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['media/scripts/libs.js', 'media/scripts/app.js'],
        dest: 'media/scripts/<%= pkg.name %>.min.js'
      }
    },
    concat: {
      libs: {
        src: 'media/scripts/libs/*',
        dest: 'media/scripts/libs.js'
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'media/scss/',
          cssDir: 'media/css'
        }
      }
    },

    watch: {
      compass: {
        files: ['media/scss/*.scss'],
        tasks: ['compass'],
        options: {
          nospawn: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};