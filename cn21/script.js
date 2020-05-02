let selectedFilter;

$(".applyFilter").click(function() {
    let filter = $(".Filter").val();
    filter = filter.toLowerCase();
    // 在以下代码旁边编写if语句。
    
    // 注意，条件是什么？如果满足条件应该执行什么？
    
    // 让我们一起做第一个例子。如果用户在输入中输入Harlem，则下面是我们要执行的代码块。请打开注释的jQuery代码。
    //Harlem
    if (filter == "harlem") {
         $("img").css("filter", "contrast(115%) brightness(120%)");
    }
    // Bushwick
    if (filter == "bushwick") {
        $("img").css("filter", "contrast(50%) brightness(180%)");
    }
    // SOMA
    if (filter == "soma") {
        $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
    }
    // Sunset
    if (filter == "sunset") {
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    }
    //xbb
    if (filter == "xbb") {
        $("img").css("filter", "contrast(70%) hue-rotate(-50deg) saturate(150%)");
    }
});

$(".sizeButton").click(function() {
    let size = $(".size").val();
    size = parseInt(size);    
    $(".png").css("width",size + "px");});

$(".reset").click(function() {
    $("img").css("filter", "");
});
