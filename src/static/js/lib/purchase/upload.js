/**
 * Created by loadman on 10/28/14.
 */
require.config({

	baseUrl:"/static/js/lib",

	paths:{

		"jquery":"/static/js/lib/jquery",

		"dialog":"/static/js/lib/dialog-min",

        "jquery.customSelect":"/static/js/lib/jquery.customSelect.min"
	},

	"shim":{

		'jquery':{

			exports:"$"


		},

		'dialog':{
			deps:['jquery'],
			exports:'dialog'

		},

       'jquery.customSelect':{
           deps:['jquery'],
           exports:'jquery.customSelect'
       }

	}

});


require([ 'jquery', 'jquery.customSelect','dialog'],function ($,customSelect,dialog) {

      $('#purchase-belongto').customSelect();

       $("*[data-event='oa_add_flow']").on('click',function(){



       });


});