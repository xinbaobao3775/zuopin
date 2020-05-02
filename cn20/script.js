function Judgment (answer,txt,correctAnswer) {
    //如果答案正确，则显示此文本
    if (answer == correctAnswer) {
        $(txt).text("正确!");
        $("body").css("background-color","green");
    }else {
    //如果答案不正确，则显示此文本
        $(txt).text("错误！请再试一次"); 
        $("body").css("background-color","red");
    }
}

// 1. 英语

$(".englishButton").click(function(){
    let englishInput = $(".english").val();
    englishInput = englishInput.toLowerCase();
    Judgment(englishInput,".englishMessage","monday");
});


// 2. 地理

$(".ssButton").click(function(){
    let ssInput = $(".socialStudies").val();
    Judgment(ssInput,".ssMessage","北京");
});


// 3. 数学

$(".mathButton").click(function(){
    let mathInput = $(".math").val();
    Judgment(mathInput,".mathMessage","30");
});


// 4. 科学

$(".scienceButton").click(function(){
    let scienceInput = $(".science").val();
    Judgment(scienceInput,".scienceMessage","固体");
});
