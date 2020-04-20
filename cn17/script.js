$("button").click(function(){
    let txt = $(".userComment").val();
    $(".messages").text(txt);
    alert("成功提交 ：D")
});