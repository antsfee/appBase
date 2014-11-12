require.config({
	baseUrl:"/static/js/lib",
	paths:{
		"jquery":"/static/js/lib/jquery",
		"jquery.dialog":"/static/js/lib/dialog-min",
        "jquery.customSelect":"/static/js/lib/jquery.customSelect.min",
        "jquery.validator":"/static/js/lib/jquery.validator"
	},

	"shim":{

		'jquery':{
                exports:"Jquery"
		},
		'jquery.dialog':{
			deps:['jquery'],
			exports:'dialog'
		},
       'jquery.customSelect':{
           deps:['jquery'],
           exports:'$.customSelect'
       },

       'jquery.validator':{
           deps:['jquery'],
           exports:'$.validator'
        }
	}

});


require([ 'jquery', 'jquery.customSelect' , 'jquery.dialog','jquery.validator','jquery.datetimepicker'],function ($ ,customSelect ,dialog ,validators,datetimepicker ) {

      $(".belongto-render > select").customSelect();

      $("#flow-dismiss-startime").datetimepicker({
                format:'Y-m-d',
                lang:'ch',
                inline:false,
                timepicker:false
          });

      $("[data-event]").click(function(event){

          var $t = $(this);

          if($t.data('event')=='return') {


              //console.log("who know should do");

          }

          if($t.data('event')=='submit' || $t.data('event')=='reSubmit' || $t.data('event')=='sure'){

               var selector = $t.data("selector");

               var  $tt =  $(selector);

                 $tt.validator({
                     fields:{
                         "flow-title":"required; flow-title",
                         "flow-dismiss-name":"required; flow-dismiss-name",
                         "flow-dismiss-startime":"required; flow-dismiss-startime",
                       //  "flow-become-department":"required; flow-become-department",
                         "flow-dismiss-position":"required; flow-dismiss-position",
                         "flow-dismiss-type":"required; flow-dismiss-type",
                         "flow-dismiss-reason":"required; flow-dismiss-reason"
                     },

                    valid:function(form){

                        form.submit();
                    }
                }).on('click',$t,function(event){

                    //console.log(event.delegateTarget);

                    $(event.delegateTarget).trigger("validate");

                });

          }

          if($.data('event')=='oa_add_flow'){



          }



    });





    // 提交时候 插件上传 和监测   window.swfu.startUpload();


});