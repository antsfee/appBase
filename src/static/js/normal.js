requirejs.config({

	baseUrl:"src/static/js/lib",
	path:{

		"jquery":"jquery1.7.2-min.js",

		"dialog":"dialog-min.js"


	},

	"shim":{
		
		'jquery':{

			exports:"$"


		},

		'dialog':{
			deps:['jquery'],
			exports:'Dialog'

		}

	}

});