/**
 * Created by 7:30 on 2014/11/6.
 */
require.config({
	baseUrl:"/static/js/lib",
	paths:{
		"jquery":"/static/js/lib/jquery",
		"jquery.dialog":"/static/js/lib/dialog-min",
//        "jquery.customSelect":"/static/js/lib/jquery.customSelect.min",
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

//       'jquery.customSelect':{
//           deps:['jquery'],
//           exports:'$.customSelect'
//       },

       'jquery.validator':{
           deps:['jquery'],
           exports:'$.validator'
        }
	}

});


require([ 'jquery', , 'jquery.dialog','jquery.validator'],function ($ ,dialog ,validators ) {

      $("[data-event]").click(function(event){

          var $t = $(this);


          if($t.data('event')=='return'){


              //console.log("who know should do");

          }




    });

    $("form[name='purchase-form']").validator({

            fields:{ "purchase-title":"required;purchase-title" }

    });

    $("#purchase-pro-add-list").delegate('.checkbox','click',function(event){

           event.stopPropagation();
          // console.log("#purchase-pro-list checkbox click delegate");

           if(event.currentTarget.nodeName !='I') return false;

                var $that = $(this);

                if( ( $that.data('event') === "select-all") && $that.data("selector")){

                        if($that.parent().hasClass('selected')){

                             $.each($($that.data("selector")) , function(i,ele){

                                var    $ele = $(ele);

                                        $ele.attr("data-stateselect","no");

                                        $ele.find('.chosen').removeClass("selected");
                             });


                        }else{

                            $.each($($that.data("selector")) , function(i,ele){

                                var    $ele = $(ele);



                                $ele.attr("data-stateselect","selected");

                                $ele.find('.chosen').addClass("selected");
                            });

                        }

                }

                if($that.parent().hasClass("selected")){

                      $that.parent().removeClass("selected").parent().attr("data-stateselect","no");

                }else{

                      $that.parent().addClass("selected").parent().attr("data-stateselect","selected");

                    }

       });

    // 提交时候 插件上传 和监测   window.swfu.startUpload();


});