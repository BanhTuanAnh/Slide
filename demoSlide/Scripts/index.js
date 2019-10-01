
var slideIndex = 1;
showDivs(slideIndex);
function changeDivs() {
    var me = this;
    if ($(me).attr("direction") == "left") {
        showDivs(slideIndex -= 1)
    }
    else if ($(me).attr("direction") == "right") {
        showDivs(slideIndex += 1)
    }
   
}

function showDivs(n) {
    var i;
    var x = $(".mySlides")
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
$(".slideControl").on("click",changeDivs)