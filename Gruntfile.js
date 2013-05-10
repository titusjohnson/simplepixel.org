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
          require: ['zurb-foundation'],
          sassDir: 'media/scss/',
          cssDir: 'media/css',
          imagesDir: "media/images"
        }
      }
    },
    watch: {
      compass: {
        files: ['media/scss/*.scss'],
        tasks: ['compass','notify:watch'],
        options: {
          nospawn: true
        }
      }
    },
    notify_hooks: {
      options: {
        enabled: true
      }
    },
    notify: {
      watch: {
        options: {
          title: "grunt:watch",
          message: "Compass compiled"
        }
      }
    },
    connect: {
      server: {
        options: 8080,
        base: './'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s).
  grunt.registerTask('default', ['connect:server', 'watch']);
};