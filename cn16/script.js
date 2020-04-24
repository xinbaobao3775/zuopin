$(".login").click(function() {
    let Name = $(".username").val();
    $(".input-group").attr("style","display:none;");
    alert("欢迎回来"+Name);
    $(".txt").text(Name);
    $(".come").text("欢迎回来");
 });

 $(".Delete").click(function() {
    $("input").val("");
});