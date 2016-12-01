


//js开始
$(function (){
    $(".p1_min_s").css("margin-left","-53px");



    //定时器开始
    var p5_max_s1 = 0;
    var p5_max_s2 = 0;
    var p5_max_s3 = 0;
    var timer = setInterval(function (){
        p5_max_s1++;
        p5_max_s2++;
        p5_max_s3++;
        if (p5_max_s1 > 3) {
            p5_max_s1 = 0;
            var t = $(".p5_max_s").eq(0);
            var a = t.find(".p5_max_dian_e").index();
            a++;
            if (a > 4) {
                a = 0;
            };
            t.find(".p5_max_dian_e").removeClass("p5_max_dian_e");
            t.find(".p5_max_dian").eq(a).addClass("p5_max_dian_e");
            t.find(".p5_max_s_img").stop().fadeOut();
            t.find(".p5_max_s_img").eq(a).stop().fadeIn();
        }
        if (p5_max_s2 > 3) {
            p5_max_s2 = 0;
            var t = $(".p5_max_s").eq(1);
            var a = t.find(".p5_max_dian_e").index();
            a++;
            if (a > 6) {
                a = 0;
            };
            t.find(".p5_max_dian_e").removeClass("p5_max_dian_e");
            t.find(".p5_max_dian").eq(a).addClass("p5_max_dian_e");
            t.find(".p5_max_s_img").stop().fadeOut();
            t.find(".p5_max_s_img").eq(a).stop().fadeIn();
        }
        if (p5_max_s3 > 3) {
            p5_max_s3 = 0;
            var t = $(".p5_max_s").eq(2);
            var a = t.find(".p5_max_dian_e").index();
            a++;
            if (a > 4) {
                a = 0;
            };
            t.find(".p5_max_dian_e").removeClass("p5_max_dian_e");
            t.find(".p5_max_dian").eq(a).addClass("p5_max_dian_e");
            t.find(".p5_max_s_img").stop().fadeOut();
            t.find(".p5_max_s_img").eq(a).stop().fadeIn();
        }
    },1000);

    // p1标题消失
    var p1_bt = setTimeout(function (){
        $(".p1_biaoti").fadeOut();
    },6000);
    //定时器结束

    
    //全部点击事件开始


    $(".p1_biaoti_img").get(0).addEventListener('webkitAnimationEnd',function (e){
        $(".p1_biaoti").fadeOut();
        e.stopPropagation();
    },false);



    $(".p1_anniu").hover(
        function (){
            $(".p1_min").css({"width":"747px","left":"-320px"});
            $(".p1_min_s").css({"margin-left":"","opacity":"1"});
        },function (){
            $(".p1_min").css({"width":"107px","left":"0px"});
            $(".p1_min_s").css({"margin-left":"-53px","opacity":"0"});
        }
    );



    $(".p1_min_s").on("click",function (e){
        $(".p1_max_img").stop().fadeOut();
        $(".p1_max_img").eq($(this).index()).stop().fadeIn();
        e.stopPropagation();
    });




    var p2_min_s = 0;
    $(".p2_min_s").on("click",function (){
        $(".p2_min_s").eq(p2_min_s).css("background-image","url(./img/p2/min_"+ (p2_min_s+1) +".png)");
        p2_min_s = $(this).index();
        $(this).css("background-image","url(./img/p2/min_"+ (p2_min_s+1) +"_e.png)");
        $(".p2_max_s").stop().fadeOut();
        $(".p2_max_s").eq(p2_min_s).stop().fadeIn();
        $(".p2_tishi_s").stop().fadeOut();
        $(".p2_tishi_s").eq(p2_min_s).stop().fadeIn();
        $(".p2_video iframe").attr("src",$(this).attr("_src"));
    });



    
    $(".p3_min_s").on("click",function (){
        $(".p3_min_s_e").removeClass("p3_min_s_e");
        $(this).addClass("p3_min_s_e");
        $(".p3_max_s").stop().fadeOut();
        $(".p3_max_s").eq($(this).index()).stop().fadeIn();
        $(".p3_wen_s").stop().fadeOut();
        $(".p3_wen_s").eq($(this).index()).stop().fadeIn();
        $(".p3_video iframe").attr("src",$(this).attr("_src"));
    });





    $(".p4_min_s").on("click",function (){
        $(".p4_min_s_e").removeClass("p4_min_s_e");
        $(this).addClass("p4_min_s_e");
        $(".p4_dian_s_e").removeClass("p4_dian_s_e");
        $(".p4_dian_s").eq($(this).index()).addClass("p4_dian_s_e");
        $(".p4_max_img").stop().fadeOut();
        $(".p4_max_img").eq($(this).index()).stop().fadeIn();
    });
    $(".p4_dian_s").on("click",function (){
        $(".p4_min_s").eq($(this).index()).click();
    });





    $(".p5_max_dian").hover(
        function (){
            p5_max_s1 = -20;
            p5_max_s2 = -20;
            p5_max_s3 = -20;
            $(this).siblings(".p5_max_dian_e").removeClass("p5_max_dian_e");
            $(this).addClass("p5_max_dian_e");
            $(this).parent(".p5_max_s_bottom").siblings(".p5_max_s_img").stop().fadeOut();
            $(this).parent(".p5_max_s_bottom").siblings(".p5_max_s_img").eq($(this).index()).stop().fadeIn();
        },function (){
            p5_max_s1 = 0;
            p5_max_s2 = 0;
            p5_max_s3 = 0;
        }
    );
    $(".p5_min_s").on("click",function (){
        $(".p5_min_s_e").removeClass("p5_min_s_e");
        $(this).addClass("p5_min_s_e");
        $(".p5_max_s").stop().fadeOut();
        $(".p5_max_s").eq($(this).index()).stop().fadeIn();
    });
    $(".p5_left").on("click",function (){
        var a = $(".p5_min_s_e").index();
        a--;
        if (a < 0) {
            a = 2;
        };
        $(".p5_min_s").eq(a).click();
    });
    $(".p5_right").on("click",function (){
        var a = $(".p5_min_s_e").index();
        a++;
        if (a > 2) {
            a = 0;
        };
        $(".p5_min_s").eq(a).click();
    });





    var doc = $(document);
    var by = $("body");
    var go_top = $(".go_top");
    if (window.navigator.userAgent.indexOf("Firefox")!=-1){
        by.get(0).addEventListener("DOMMouseScroll", fnn, false);

        go_top.on("click",function (){
            doc.scrollTop(0);
            $(this).hide();
        })

    }else{
        by.get(0).onmousewheel=fn;

        go_top.on("click",function (){
            by.animate({
                scrollTop: "0"
            }, 1000 );
            $(this).hide();
        })

    }

    function fn() {
        if (by.scrollTop() > 2000 && go_top.css("display") == "none") {
            go_top.fadeIn();
        } else if (by.scrollTop() < 2000 && go_top.css("display") == "block") {
            go_top.fadeOut();
        }
    };

    function fnn() {
        if (doc.scrollTop() > 2000 && go_top.css("display") == "none") {
            go_top.fadeIn();
        } else if (doc.scrollTop() < 2000 && go_top.css("display") == "block") {
            go_top.fadeOut();
        }
    };





    //全部点击事件结束





});
//js结束