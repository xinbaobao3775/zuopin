let avengerPics = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

$("button").click(function() {
    for (i = 0 ; i <= avengerPics.length ; i++) {
        $(".avengers").append("<img src=\""+avengerPics[i]+"\"></img>");
    }


});

