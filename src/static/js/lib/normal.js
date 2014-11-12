requirejs.config({

	baseUrl:"src/static/js/lib",
	path:{

		"jquery":"jquery.js",

		"dialog":"dialog-min.js",

        "customSelect":"jquery.customSelect.min.js"
	},

	"shim":{
		
		'jquery':{

			exports:"$"


		},

		'dialog':{
			deps:['jquery'],
			exports:'Dialog'

		},

       'customSelect':{
           deps:['jquery'],
           exports:"customSelect"
       }

	}

});