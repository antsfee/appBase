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


require([ 'jquery', 'jquery.customSelect' , 'jquery.dialog','jquery.validator'],function ($ ,customSelect ,dialog ,validators ) {

      $('#purchase-belongto').customSelect();

     $("#purchase-pro-action-bar .btn_add").click(function(event){

      //  if(event.currentTarget)

            event.stopPropagation();

            $("#purchase-pro-add-list").append(' <li class="item"><span class="chosen"><i class="checkbox"></i></span><span class="pro-name"><input type="text" name="" /></span><span class="pro-type"><input type="text" name="" /></span><span class="pro-count"><input type="text" name="" /></span></li>');


    });

     $("#purchase-pro-action-bar .btn_delete").click(function(event){

                event.stopPropagation();

                var $t = $(".item , #purchase-pro-add-list");

                var len = $t.size();
                 //console.dir($t.filter("[data-stateselect='selected']"));

                //console.log($t.size());

                if($t.filter("[data-stateselect='selected']").size() > 0){

                      if(confirm("确定您要删除的选项吗？")){

                          if((len -1) == $t.filter("[data-stateselect='selected']").size()){

                            $(".heads ,#purchase-pro-add-list").filter("[data-stateselect='selected']").attr("data-stateselect","no").find(".chosen").removeClass("selected");

                          }

                           $(".item ,#purchase-pro-add-list").filter("[data-stateselect='selected']").remove();



                      }
                }else{

                       alert("请选择您的要删除的标签！");

                }
    });

      $("[data-event]").click(function(event){

          var $t = $(this);


          if($t.data('event')=='save'){


              //console.log("who know should do");

          }

          if($t.data('event')=='submit'){

                var selector = $t.data("selector");

                $tt =  $(selector);


                $(event.delegateTarget).trigger("validate")

                window.swfu.startUpload();

                $tt.submit();

          }

          if($.data('event')=='oa_add_flow'){



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