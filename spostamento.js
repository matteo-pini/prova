 function sposta_a_destra() {$("#quadrato").removeClass("left"); $("#quadrato").addClass("right")}

function sposta_giù() {$("#quadrato").removeClass("right"); $("#quadrato").addClass("bottom")}

function sposta_giùsinistra() {$("#quadrato").removeClass("bottom"); $("#quadrato").addClass("bottomleft")}

function sposta_su() {$("#quadrato").removeClass("bottomleft"); $("#quadrato").addClass("left")}

 function quando_click() {
   if ($("#quadrato").hasClass("left")) {sposta_a_destra()}
   else if ($("#quadrato").hasClass("right")) {sposta_giù()}
   else if ($("#quadrato").hasClass("bottom")) {sposta_giùsinistra()}
   else if ($("#quadrato").hasClass("bottomleft")) {sposta_su()}
 }

$("#quadrato").on("click", quando_click)
