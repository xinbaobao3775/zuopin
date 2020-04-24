// an oreo cookie weighs 14.5 grams
let oreo = 14.5;

// one pound is equal to 500 grams
let jin = 500;

let studentWeight;

$("button").click(function() {
    studentWeight = $("input").val();
    let oreos = ( studentWeight * jin ) / oreo;
    $("img").attr("src", "giphy.gif");
    $("#oreoWeight").text("你的奥利奥体重是 " + oreos + " 奥利奥!");

    if (oreos > 100) {
        alert("你知道吗你要运动了");
        alert("我说真的哦");
        alert("你不要不相信哦");
        alert("我说真的");
        alert("求你了 (✿◕‿◕✿)");
    }
    
});



