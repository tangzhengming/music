setTimeout(function(){
    $("#load").hide()
},1000)
$(function(){
    //开始加载动画
    //鼠标移入箭头变化
    /*$(".small:has").on('mouseenter',function(){
        $(this).css({
            "opacity":1,
            "background":"#ffffff",
            "color":"black"
                })
            });
    $(".small").on("mouseleave",function(){
            $(this).css({
                "opacity":1,
                "background":"",
                "color":"#ffffff"
            })
        })
    */
   setTimeout(function(){
    //点击图片到下一张轮播图
    var items = document.querySelectorAll(".slides>li"); //获取所有的图片
    var left = document.getElementById("left"); //获取左箭头
    var right = document.getElementById("right"); //获取右箭头
    var index = 0;
    var getNext = function(){
        for( var item of items){
            item.className = "";
        }
        items[index].className = "active";
    }
    var getEnt = function(){
        var titles = document.getElementsByClassName("title");//获取大标题
        var butitles = document.getElementsByClassName("butitle");//获取小标题
        var smalls = document.getElementsByClassName("small")//获取登陆框
        for( var title of titles){
            title.className = "title"
        }
        for( var butitle of butitles){
            butitle.className = "butitle"
        }
        for ( var small of smalls){
            small.className = "small"
        }
        $(".adjust-block").eq(index).find(".title").addClass("item");
        $(".adjust-block").eq(index).find(".butitle").addClass("item");
        $(".adjust-block").eq(index).find(".small").addClass("item");
    }
     getEnt();
    right.addEventListener("click",function(){
        if(index < 3) index++;
        else index = 0;
        getNext();
        getEnt()
    })
    left.addEventListener("click",function(){
        if(index == 0) index = 3;
        else index--;
        getNext()
        getEnt()
    })
    //鼠标移入移出显示箭头
    $("#full-slider").on('mouseenter',function(){
        $(this).find(".slider>li").css({
            "opacity":1,
            "transform":"translateX(0)"
        })
    });
    $("#full-slider").on("mouseleave",function(){
        $(this).find(".slider>li").eq(0).css({
            "opacity":0,
            "transform":"translateX(-100%)"
        })
        $(this).find(".slider>li").eq(1).css({
            "opacity":0,
            "transform":"translateX(100%)"
        })
    })
    //鼠标移入图标改变颜色
    $(".abil>li").on("mouseenter",function(){
        $(this).find(".color").addClass("colors");
    })
    $(".abil>li").on("mouseleave",function(){
        $(this).find(".color").removeClass("colors");
    })
    //数字增加
         function work(ele, start, end, time) {  // 开始值，结束值，间隔时间
            var timeStart = +new Date;
            var numSpan = end - start;   //相隔的数值
        
            var timeEnd, // 结束时间
                timer;   //定时器
        
            timer = setInterval(function () {
                timeEnd = +new Date;  //当前时间
        
                var timeSpan = timeEnd - timeStart;  // 当前间隔时间
        
                // timeSpan / time= x / numSpan;   间隔时间/实际间隔时间 = (当前间隔值) / 总间隔数值
                var span = numSpan * timeSpan / time;  //当前间隔值
                ele.html(~~(start + span));
        
                if (timeSpan > time) {   //超时清空
                    ele.html(end);
                    var end = +new Date;
                    clearInterval(timer);
                }
        
            }, 16);
        }
        var liArr = $(".number");
        
        
        $.each(liArr, function () {
            var self = $(this),
                start = 0,                                 //起始值
                end = self.attr("data-value"),             //结束值
                time = +self.attr("data-time") * 1000;     //间隔时间
            work(self, start, end, time);
            })
        },800)
    })

