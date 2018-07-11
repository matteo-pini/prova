var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


var slideIndex = 2;
showDivz(slideIndex);

function plusDivz(f) {
    showDivz(slideIndex += f);
}

function showDivz(f) {
    var i;
    var y = document.getElementsByClassName("mySlides1");
    if (f > y.length) {slideIndex = 1}
    if (f < 1) {slideIndex = y.length} ;
    for (g = 0; g < y.length; g++) {
        y[g].style.display = "none";
    }
    y[slideIndex-1].style.display = "block";
}

var slideIndex = 3;
showDivx(slideIndex);

function plusDivx(u) {
    showDivx(slideIndex += u);
}

function showDivx(u) {
    var i;
    var z = document.getElementsByClassName("mySlides3");
    if (u > z.length) {slideIndex = 1}
    if (u < 1) {slideIndex = z.length} ;
    for (l = 0; l < z.length; l++) {
        z[l].style.display = "none";
    }
    z[slideIndex-1].style.display = "block";
}

var slideIndex = 4;
showDivy(slideIndex);

function plusDivy(p) {
    showDivy(slideIndex += p);
}

function showDivy(p) {
    var i;
    var t = document.getElementsByClassName("mySlides4");
    if (p > t.length) {slideIndex = 1}
    if (p < 1) {slideIndex = t.length} ;
    for (c = 0; c < t.length; c++) {
        t[c].style.display = "none";
    }
    t[slideIndex-1].style.display = "block";
}


function scompare() {
  $ ("#caricato, .loader").fadeOut(400);
};

$(window).on('load',scompare);
