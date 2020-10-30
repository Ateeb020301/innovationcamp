var open = document.getElementById("open");
var close = document.getElementById("close")
var nav = document.getElementById("navid");

open.onclick=function(){
nav.style.right="0";
}
close.onclick=function(){
    nav.style.right='-200px';
    }