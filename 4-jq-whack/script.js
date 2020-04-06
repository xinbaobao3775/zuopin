$(".hole1").hide();
$(".hole2").hide();
$(".hole3").hide();
var shu = 0;
$(".whack1").click(function(){
    $(".mole1").hide();
    $(".hole1").show();
    shu++;
});
    
$(".whack2").click(function(){
    $(".mole2").hide();
    $(".hole2").show();
    shu++;
    if (shu = 3) {
        $(".mole1").show();
        $(".hole1").hide();
        $(".mole2").hide();
        $(".hole2").show();
        $(".mole3").show();
        $(".hole3").hide();
        shu = 1;
    }
});
    
$(".whack3").click(function(){
    $(".mole3").hide();
    $(".hole3").show();
    shu++;
    if (shu = 3) {
        $(".mole1").show();
        $(".hole1").hide();
        $(".mole2").show();
        $(".hole2").hide();
        $(".mole3").hide();
        $(".hole3").show();
        shu = 1;
    }
});
    
$(".reset").click(function(){
    $(".mole1").show();
    $(".hole1").hide();
    $(".mole2").show();
    $(".hole2").hide();
    $(".mole3").show();
    $(".hole3").hide();
    shu = 0;
});