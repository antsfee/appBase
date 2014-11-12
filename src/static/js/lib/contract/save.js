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

      $("#flow-contract-startime").datetimepicker({
                format:'Y-m-d',
                lang:'ch',
                inline:false,
                timepicker:false
          });

         $("#flow-contract-endtime").datetimepicker({
                format:'Y-m-d',
                lang:'ch',
                inline:false,
                timepicker:false,
                onShow:function(ct){
                    this.setOptions({
                        minDate:$("#flow-contract-startime").val() ? $("#flow-contract-startime").val():false

                    })
                }
          });

      $("[data-event]").click(function(event){

          var $t = $(this);

          if($t.data('event')=='return') {


              //console.log("who know should do");

          }

          if($t.attr('data-event')=='submit' ||$t.attr('data-event')=='reSubmit' || $t.attr('data-event')=='sure'){

               var selector = $t.attr('data-selector');

               var  $tt =  $(selector);

                    console.log($tt);

                 $tt.validator({
                     fields:{
                         "flow-title":"required; flow-title",
                         "flow-contract-type":"required; flow-contract-type"
                     },

                    valid:function(form){

                        form.submit();
                    }
                }).on('click',$t,function(event){

                    //console.log(event.delegateTarget);

                    $(event.delegateTarget).trigger("validate");

                });

          }

          if($.attr('data-event')=='oa_add_flow'){



          }



    });





    // 提交时候 插件上传 和监测   window.swfu.startUpload();


});