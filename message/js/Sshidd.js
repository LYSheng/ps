var menuSou=document.querySelector(".menu_sou");
var menuListBox=document.querySelector(".menu_list_box");
var menuList=document.querySelectorAll(".menu_list");
var menussNow=document.querySelector(".menu_ssNow");
menussNow.addEventListener("touchstart",function () {
    menuListBox.style.display="block";
    menuSou.innerHTML="&#xe607;";
});
menuSou.addEventListener("touchstart",function () {
    menuListBox.style.display="none";
    menuSou.innerHTML="&#xe605;";
});



var chuSou=document.querySelector(".chu_sou");
var chuBox=document.querySelector(".chu_box");
var chussNow=document.querySelector(".chu_ssNow");
chussNow.addEventListener("touchstart",function () {
    chuBox.style.display="block";
    chuSou.innerHTML="&#xe607;";
});
chuSou.addEventListener("touchstart",function () {
    chuBox.style.display="none";
    chuSou.innerHTML="&#xe605;";
});
