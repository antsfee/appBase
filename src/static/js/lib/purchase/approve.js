/**
 * Created by 7:30 on 2014/11/6.
 */
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
require([ 'jquery', 'jquery.dialog','jquery.validator'],function ($ ,dialog ,validators ) {

      $("[data-event]").click(function(event){

          var $t = $(this);


          if($t.data('event')=='return'){


              console.log("in the return ");

          }

          if($t.data('event')=='agree'){

                var selector = $t.data("selector");

                $tt =  $(selector);

               // $(event.delegateTarget).trigger("validate")

                //window.swfu.startUpload();


                return false;

                $tt.submit();

          }

          if($.data('event')=='disagree'){

               console.log("in disagree");

          }



    });

    $("form[name='flow-form']").validator({
            fields:{ "purchase-title":"required;purchase-title" }
    });
    // 提交时候 插件上传 和监测   window.swfu.startUpload();
});

