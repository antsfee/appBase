module.exports = function(grunt){

	//  Project configuration

	grunt.initConfig({

		pkg:grunt.file.readJSON('package.json'),

		uglify:{
			options:{
				banner:'/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{

				src:'src/static/src/*.js',
				src:'build/static/*.js',
			}

		},

		sass:{

			dist:{

				files:[{

					expand:true , 
					cwd:"src/static/sass",
					src:['*.scss'],
					dest:'../css',
					ext:'.css'

				}]

			}

		},

		cssmin:{

			minify:{

				expand:true ,

				cwd:"src/static/css/",

				src:['*.css','!*.min.css'],

				dest:'build/static/css/',

				ext:'.min.css'

			}

		},
		copy:{

			main:{

				files:[

				{expand:true , cwd:'./', src:['*.html'],dest:'buld/'},
				{expand:true , cwd:'src/static/img', src:['**.(jpg,png,gif)'],dest:'buld/static/img/'}

				]

			}


		},

		watch:{

			sass:{

				files:['src/sass*.scss'],
				tasks:['sass'],
				options:{

					livereload:true,

				},

			},

			js:{

				files:['src/static/**.js'],
				tasks:[''],
				options:{
					livereload:true,

				},

			}

		},

		markdown:{

			all:{

				files:[
					{	
						expand:true ,
						src:'**.md',
						dest:'docs/html/',
						ext:'.html'

					}
				]



			}

		}

		// end grunt-init config 
	});


	// load "sass " plugin 
	grunt.loadNpmTasks("grunt-contrib-sass");

	// load 'css min ' plugin

	grunt.loadNpmTasks("grunt-contrib-cssmin");


	// load "uglify" plugin
	grunt.loadNpmTasks("grunt-contrib-uglify");


	// load "markdown" plugin  https://www.npmjs.org/package/grunt-markdown
	grunt.loadNpmTasks("grunt-markdown");


	// load "copy" plugin
	grunt.loadNpmTasks("grunt-contrib-copy");

	// load "watch" plugin

	grunt.loadNpmTasks("grunt-contrib-watch");


	// defautl execue task list
	grunt.registerTask("defautl",['sass','watch']);

	// 上线前或者发布一个版本对图片和css ,js 压缩支持
	grunt.registerTask("min",['uglify','cssmin']);

	grunt.registerTask("build",['uglify','cssmin','copy','markdown']);

}