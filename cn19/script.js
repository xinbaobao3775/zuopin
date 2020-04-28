$(".to-pack-button").click(function() {
    let txt = $(".to-pack-input").val();
    $(".packing-list").append("<li>"+txt);
 });

 $(".to-DoList-button").click(function() {
    let txt = $(".to-DoList-input").val();
    $(".toDoList").append("<li>"+txt);
 });