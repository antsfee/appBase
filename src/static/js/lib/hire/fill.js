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


require([ 'jquery', 'jquery.customSelect' , 'jquery.dialog','jquery.validator'],function ($ ,customSelect ,dialog ,validators ) {

      $(".belongto-render > select").customSelect();


      $("[data-event]").click(function(event){

          var $t = $(this);

          if($t.data('event')=='return'){


              //console.log("who know should do");

          }

           if($t.data('event')=='save'){

               var selector = $t.data("selector");

               var  $tt =  $(selector);

                 $tt.validator({
                     fields:{
                         "flow-title":"required; flow-title",
                         "flow-hir-content":"required; flow-hir-content",
                         "flow-hir-name":"required; flow-hir-name",
                         "flow-hir-time":"required; flow-hir-time",
                         "flow-hir-department":"required; flow-hir-department",
                         "flow-hir-position":"required; flow-hir-position",
                         "flow-hir-superior":"required; flow-hir-superior",
                         "flow-hir-info":"required; flow-hir-info",
                     },

                    valid:function(form){

                        form.submit();
                    }
                }).on('click',$t,function(event){

                    //console.log(event.delegateTarget);

                    $(event.delegateTarget).trigger("validate");

                });

           }

          if($t.data('event')=='submit'){

               var selector = $t.data("selector");

               var  $tt =  $(selector);

                 $tt.validator({
                     fields:{
                         "flow-title":"required; flow-title",
                         "flow-hir-content":"required; flow-hir-content",
                         "flow-hir-name":"required; flow-hir-name",
                         "flow-hir-time":"required; flow-hir-time",
                         "flow-hir-department":"required; flow-hir-department",
                         "flow-hir-position":"required; flow-hir-position",
                         "flow-hir-superior":"required; flow-hir-superior",
                         "flow-hir-info":"required; flow-hir-info",
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