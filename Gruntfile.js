module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			docs: {
				files: {
					'build/assets/scripts/main.js': ['src/scripts/main.js'],
			        'build/assets/scripts/reduce-menu.js': ['src/scripts/reduce-menu.js'],
                    'build/assets/scripts/jquery.themeounch.tools.min.js': ['src/scripts/jquery.themeounch.tools.min.js'],
                    'build/assets/scripts/jquery.themepunch.revolution.min.js': ['src/scripts/jquery.themepunch.revolution.min.js'],
                    'build/assets/scripts/jquery-2.0.3.min.js': ['src/scripts/jquery-2.0.3.min.js'],
                    'build/assets/scripts/jquery-migrate-1.1-1.min.js': ['src/scripts/jquery-migrate-1.1-1.min.js'],
                    'build/assets/scripts/map.js': ['src/scripts/map.js'],
                    'build/assets/scripts/top.js': ['src/scripts/top.js']
                }
			}
		},

		cssmin: {
			docs: {
				files: {
					'build/assets/styles/main.css': ['src/styles/main.css'],
					'build/assets/styles/neat-blue.css': ['src/styles/neat-blue.css'],
                    'build/assets/styles/other.css': ['src/styles/other.css'],
                    'build/assets/styles/setting.css': ['src/styles/setting.css']

                }
			}
		},

		copy: {
			docs: {
				files:{

				}
			}
		},

		static: {
			options: {
				template: 'src/jade'
			},
			docs:{				
				files: {'b': 'src/content'}
			}
		},

		jade: {
			options:{
				pretty: true
			},
			docs: {
				files: {
					'build/index.html':'src/jade/homepage.jade',
					'build/aboutus.html':'src/jade/aboutus.jade',
					'build/aboutus2.html':'src/jade/aboutus2.jade',
					'build/aboutus3.html':'src/jade/aboutus3.jade',
					'build/products.html':'src/jade/products.jade',
					'build/contact.html':'src/jade/contact.jade',
                    'build/specification.html':'src/jade/products_specification.jade',
                    'build/imaging.html':'src/jade/products_imaging.jade',
                    'build/resource.html':'src/jade/resource.jade',
                    'build/newOne.html':'src/jade/new1.jade',
                    'build/newTwo.html':'src/jade/new2.jade'
                }
			}
		},

		watch: {
			css: {
				files: {
					'assets/styles/main.css': ['src/styles/main.css'],
					'assets/styles/neat-blue.css': ['src/styles/neat-blue.css']
				},
	                        tasks: ['cssmin:docs']
			      },
	        
		         js: {
		    	        files: {
					'assets/scripts/main.js': ['src/scripts/main.js'],
			        'assets/scripts/reduce-menu.js': ['src/scripts/reduce-menu.js']
			     },
		                tasks: ['uglify:docs']
		           },
	        
		         jade: {
		    	        files: ['src/content/**/*.md', 'src/jade/**/*.jade'],
		      	        tasks: ['jade:docs']
		       }
		  }
	      

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['uglify', 'cssmin', 'jade']);
};