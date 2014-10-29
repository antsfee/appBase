/**
 * Created by loadman on 10/28/14.
 */
require.config({

	baseUrl:"/static/js/lib",

	paths:{

		"jquery":"/static/js/lib/jquery",

		"jquery.dialog":"/static/js/lib/dialog-min",

        "jquery.customSelect":"/static/js/lib/jquery.customSelect.min"
	},

	"shim":{

		'jquery':{

			exports:"$"


		},

		'jquery.dialog':{
			deps:['jquery'],
			exports:'jquery.Dialog'

		},

       'jquery.customSelect':{
           deps:['jquery'],
           exports:'jquery.customSelect'
       }

	}

});


require([ "jquery", 'jquery.customSelect' ,'swf/js/swfupload', 'swf/js/fileprogress' , 'swf/js/handlers' ],function ($,customSelect ,SWFUpload, fileprogress ,handlers) {

        alert("abc in upload");

      $('#purchase-belongto').customSelect();



        var swfu;

			var settings = {
				flash_url : "/static/js/lib/swf/swfupload.swf",
				upload_url: "/upload",
				post_params: {"PHPSESSID" : "23424"},
				file_size_limit : "100 MB",
				file_types : "*.*",
				file_types_description : "All Files",
				file_upload_limit : 100,
				file_queue_limit : 0,
				custom_settings : {
					progressTarget : "fsUploadProgress",
					cancelButtonId : "btnCancel"
				},
				debug: true,


                 // Button settings
                 button_image_url: "/static/img/bkpng.png",
                 button_width: "81",
                 button_height: "31",
                 button_placeholder_id: "add_plugin",
                 // button_text: '',
                 // button_text_style: "",
                 // button_text_left_padding: 12,
                 // button_text_top_padding: 3,
				// The event handler functions are defined in handlers.js
				file_queued_handler : handlers.fileQueued,
				file_queue_error_handler : handlers.fileQueueError,
				upload_start_handler : handlers.uploadStart,
				upload_progress_handler : handlers.uploadProgress,
				upload_error_handler : handlers.uploadError,
				upload_success_handler : handlers.uploadSuccess
			};

            swfu = new SWFUpload(settings);





});