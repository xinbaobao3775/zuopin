// 设置正确的用户名和密码
var correctUsername = "correctUsername";
var correctPassword = "correctPassword";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    //在下面加入代码
    if (username === "" ||password ==="") {
        $(".NullUsername").text("请填写完整");
        $(".NullUsername").css("color","red");
        $(".NullUsername").css("font-size","50px");
    }else if (username !== correctUsername && password !== correctUsername) {
        $(".NullUsername").text("说！！！ 你是谁");
        $(".NullUsername").css("color","red");
        $(".NullUsername").css("font-size","90px");
    }

    if (username === correctUsername && password !== correctUsername) {
        $(".NullPassword").text("我觉得你的密码不对。");
        $(".NullPassword").css("color","red");
        $(".NullPassword").css("font-size","30px");
    }
    
    if (username !== correctUsername && password === correctUsername) {
        $(".NullUsername").text("我觉得你的账号不对。");
        $(".NullUsername").css("color","red");
        $(".NullUsername").css("font-size","30px");
    }

    if (username === correctUsername && password === correctUsername);
    $(".login").text("欢迎回来");
});