$(".top-left").click(function() {
    $(".top-left").css("background-color","green")
    $(".clickBox").text("谢谢您单击我！")
});

$(".top-right").dblclick(function() {
    $(".top-right").css("background-color","blue")
    $(".dblClickBox").text("谢谢您双击我！")
});

$(".bottom-left").mouseover(function() {
    $(".bottom-left").css("background-color","yellow")
    $(".hoverBox").text("谢谢您在我身上徘徊！")
});

$(".bottom-right").mouseover(function() {
    $(".bottom-right").css("background-color","white")
    $(".mouseOnBox").text("谢谢您的光临！”")
});

$(".bottom-right").mouseout(function() {
    $(".bottom-right").css("background-color","red")
    $(".mouseOnBox").text("很快再来！")
});