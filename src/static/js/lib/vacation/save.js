/**
 * Created by 7:30 on 2014/11/11.
 */
require.config({
	baseUrl:"/static/js/lib",
	paths:{
		"jquery":"/static/js/lib/jquery",
		"jquery.dialog":"/static/js/lib/dialog-min",
        "jquery.customSelect":"/static/js/lib/jquery.customSelect.min",
        "jquery.validator":"/static/js/lib/jquery.validator"
        //"jquery.datetimepicker":"/static/js/lib/jquery.datetimepicker"
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


require([ 'jquery', 'jquery.customSelect' , 'jquery.dialog','jquery.validator','jquery.datetimepicker'],function ($ ,customSelect ,dialog ,validators ,datetimepicker ) {

      $('#purchase-belongto').customSelect();

      $("#vacation-startime").datetimepicker({
            lang:'ch',
            inline:false,
            formatTime:'H:i',
            formatDate:'d.m.Y',
            step:1,
            defaultTime:'08:30'
      });
     $("#vacation-endtime").datetimepicker({
             lang:'ch',
            inline:false,
            formatTime:'H:i',
            formatDate:'d.m.Y',
            step:1,
            defaultTime:'09:00',
            onShow:function(ct){
                this.setOptions({
                    minDate:$("#vacation-startime").val() ? $("#vacation-startime").val():false

                });

            }
     });


      $("[data-event]").click(function(event){
          var $t = $(this);
          if($t.data('event')=='return'){
              //console.log("who know should do");
          }
          if($t.data('event')=='save' || $t.data('event')=='submit'){
                var selector = $t.data("selector");
               var  $tt =  $(selector);
                 $tt.validator({
                     fields:{ "vacation-title":"required; vacation-title" },

                    valid:function(form){

                        form.submit();
                    }
                }).on('click',$t,function(event){

                    //console.log(event.delegateTarget);

                    $(event.delegateTarget).trigger("validate");

                });

          }

          if($.data('event')=='disagree'){



          }



    });


});