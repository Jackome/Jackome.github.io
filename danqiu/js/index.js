


//js开始
$(function (){

    //loading
    var imgarr = ["./img/fan_bg.jpg","./img/fan_s.png","./img/fx.png","./img/loading_bg.jpg","./img/loading_bi.png","./img/loading_xian.png","./img/logo.png","./img/p1_bg.jpg","./img/p1_qiu.png","./img/p1_wen1.png","./img/p1_wen2.png","./img/p1_wen3.png","./img/p1_wen4.png","./img/p1_wen5.png","./img/p2.jpg","./img/p2_wen1.png","./img/p2_wen2.png","./img/p2_wen3.png","./img/p3.jpg","./img/p3_wen2.png","./img/p4_ren.png","./img/p4_wen2.png","./img/p4_wen3.png","./img/p4_wen4.png","./img/p4_wen5.png","./img/p4_wen6.png","./img/p5_ren.png","./img/p5_wen2.png","./img/p5_wen3.png","./img/p5_wen4.png","./img/p5_wen5.png","./img/p5_wen6.png","./img/p6_ren.png","./img/p6_wen2.png","./img/p6_wen3.png","./img/p6_wen4.png","./img/p6_wen5.png","./img/p6_wen6.png","./img/p7_1.png","./img/p7_2.png","./img/p7_3.png","./img/p7_biaoti1.png","./img/p7_biaoti2.png","./img/p7_box.png","./img/p7_box_s.png","./img/p8_anniu.png","./img/p8_biaodan_bg.png","./img/p8_biaoti1.png","./img/p8_biaoti2.png","./img/p8_fei.png","./img/p8_tan.png","./img/p8_tan_anniu.png","./img/shouye_bg.jpg","./img/shouye_bi.png","./img/shouye_biaoti1.png","./img/shouye_biaoti2.png","./img/shouye_deng.png","./img/shouye_fei.png"];
    var imgobj = [];
    var imgs = 0;
    var jindu = 0;
    for (var i = 0,len = imgarr.length; i < len; i++) {
        imgobj[i] = new Image();
        imgobj[i].src = imgarr[i];
        imgobj[i].onload = function (){
            imgs++;
            jindu = Math.floor((imgs / len)*100) * 0.01;
            jindu = jindu.toFixed(2);
            $(".loading_t").css("width",jindu*($(".loading_tiao").width()) + "px");
            jindu = jindu * 100;
            jindu = Math.floor(jindu);
            $(".loading_zi").text(jindu + "%");
            if (imgs >= len) {
                $(".p_hide").hide();
                $(".loading").css("display","none");
                $(".shouye_biaoti2").css("animation","wen_play 0.5s both");
                $(".shouye_deng").css("animation","show_play 1s 0.8s both");
                $("#bgmp3")[0].play();
                $("#bgmp3")[0].pause();
                $("#bgmp3")[0].play();
            };
        }
    };

    //元素上下居中
    var byTop = 0;
    byTop = (1136 - $(".by").height()) / 2;
    $(".box").css("top",-byTop + "px");
    $(".p8").css("top",-byTop + "px");
    $(".p8").css("height",1136-byTop + "px");


    //定时器开始
    var tim_s = 0;
    var timer = setInterval(function (){
        tim_s++;
        if (tim_s > 2) {
            tim_s = 0;
            p7_box_s++;
            if (p7_box_s > 2) {
                p7_box_s = 0;
            };
            $(".p7_box_s").css("transform","translateX("+ (p7_box_s*-360) +"px)");
        }
    },1000);
    //定时器结束

    
    //全部点击事件开始

    // 音乐图标点击事件
    $("#yinyuetubiao").on('click',function (){
        if ($("#yinyuetubiao").attr("src") == "./img/yue.png") {
            $("#bgmp3")[0].play();
            $("#bgmp3")[0].currentTime = 0;
            $("#bgmp3")[0].pause();
            $("#yinyuetubiao").removeClass("yinyuetubiao");
            $("#yinyuetubiao").attr("src","./img/yue2.png");
        } else{
            $("#bgmp3")[0].play();
            $("#yinyuetubiao").addClass("yinyuetubiao");
            $("#yinyuetubiao").attr("src","./img/yue.png");
        };
    });



    var p_s = 0;
    var p_TF = true;
    var touchmoveX = 0;
    var touchendX = 0;
    // by点击事件
    $(".by").get(0).addEventListener('touchstart',function (e){
        touchmoveX = e.touches[0].pageX;
        touchendX = e.touches[0].pageX;
        // e.preventDefault();
    }, false);
    // by点击事件
    $(".by").get(0).addEventListener('touchmove',function (e){
        touchmoveX = e.touches[0].pageX;
        e.preventDefault();
    }, false);
    // by点击事件
    $(".by").get(0).addEventListener('touchend',function (e){
        if (p_TF && touchendX - touchmoveX > 80) {
            p_TF = false;
            p_s++;
            switch (p_s){
            case 1:
                $(".p_hide").hide();
                $(".p1").show();
                $(".shouye").css({"transform":"scale(2,2)","opacity":"0"});
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                $(".tishitubiao").hide();
                
                $(".fan").show();
                break;
            }
        } else if (p_TF && p_s != 0 && touchmoveX - touchendX > 80) {
            p_TF = false;
            p_s--;
            if (p_s < 1) {
                p_s = 1;
                p_TF = true;
                return false;
            };
            switch (p_s){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                $(".tishitubiao").hide();
                $(".fan").show();
                break;
            }
        }
        // console.log(p_s);
        // console.log(p_TF);
        // e.preventDefault();
    }, false);





    $(".shouye").get(0).addEventListener('webkitTransitionEnd',function (e){
        $(".shouye").hide();
        p_TF = true;
        e.stopPropagation();
    }, false);


    $(".fan").get(0).addEventListener('webkitAnimationEnd',function (e){
        $(".fan").hide();
        $(".tishitubiao").show();
        if (p_s == 8) {
            $(".content").hide();
            $(".tishitubiao").hide();
        };
        p_TF = true;
        e.stopPropagation();
    }, false);


    $(".fan_t").get(0).addEventListener('webkitAnimationEnd',function (e){
        switch (p_s){
            case 1:
                $(".p_hide").hide();
                $(".p1").show();
                break;
            case 2:
                $(".p_hide").hide();
                $(".p3").show();
                break;
            case 3:
                $(".p_hide").hide();
                $(".p2").show();
                break;
            case 4:
                $(".p_hide").hide();
                $(".p4").show();
                break;
            case 5:
                $(".p_hide").hide();
                $(".p5").show();
                break;
            case 6:
                $(".p_hide").hide();
                $(".p6").show();
                break;
            case 7:
                $(".p_hide").hide();
                $(".p7").show();
                break;
            case 8:
                $(".p_hide").hide();
                $(".p8").show();
                break;
            }
        e.stopPropagation();
    }, false);




    var p7_box_s = 0;
    $(".p7_box_left").on("click",function (){
        tim_s = -5;
        p7_box_s--;
        if (p7_box_s < 0) {
            p7_box_s = 2;
        };
        $(".p7_box_s").css("transform","translateX("+ (p7_box_s*-360) +"px)");
    });
    $(".p7_box_right").on("click",function (){
        tim_s = -5;
        p7_box_s++;
        if (p7_box_s > 2) {
            p7_box_s = 0;
        };
        $(".p7_box_s").css("transform","translateX("+ (p7_box_s*-360) +"px)");
    });


    $(".p7_box_s").get(0).addEventListener('touchmove',function (e){
        e.preventDefault();
        e.stopPropagation();
    }, false);





    // 成为学霸按钮点击事件
    $(".p8_anniu").on("click",function (){
        $(".p8_tan").show();
    });



    // 邀请朋友按钮点击事件
    $(".p8_tan_anniu").on("click",function (){
        $(".p8_tan").hide();
        $(".fx").show();
    });


    // 关闭分享提示页点击事件
    $(".fx").on("click",function (){
        $(".fx").hide();
    });




    //全部点击事件结束











// function GetQueryString(name){
//     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//     var r = window.location.search.substr(1).match(reg);
//     if(r!=null)return  unescape(r[2]); return 0;
// }


// var tiao = GetQueryString("z")*1;
// switch(tiao){
//     case 1:
//         break;
// }







});
//js结束