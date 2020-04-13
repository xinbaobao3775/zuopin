$(".replyYes").click(function() {
    $(".color").css("background-image","url(https://yishuai.github.io/img/Homer_Simpson_2006.png)")
    //背景图片
    $(".png").css("src","img\haochi.jpg");
    //人物图片
});

$(".replyNo").click(function() {  
    $(".homers-reply").text("Doh!");
    $(".homers-reply").css("color","red");
    $(".homers-reply").css("font-size","50px");
    //txt
    $(".png").css("width","300px");
    //png
    $(".text").css("color","red");
    //h1
    $(".color").css("background-color","Pink")
    //html color
});

