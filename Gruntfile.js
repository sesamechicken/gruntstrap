module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
  grunt.registerTask('cssmin', [ 'cssmin' ]);
  grunt.registerTask('uncss', ['uncss']);
  grunt.initConfig({
   
    watch: {
      js: {
        files: ['js/*.js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true,
        }
      },
      html: {
      	files: ['index.html'],
      	options: {
      		livereload: true,
      	}
      }
    },
    cssmin: {
    	minify: {
    		files: {
      			'css/app.min.css': ['css/app.css']
    		}
    	}
	  },
    uncss: {
      dist: {
        files: {
          'css/app.css': ['index.html']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/app.min.js': ['bower_components/fastclick/lib/fastclick.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js']
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');
 
};
