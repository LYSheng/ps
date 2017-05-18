var followUp=document.querySelectorAll(".follow_up");
var mandatoryBox=document.querySelector(".mandatory_box");
for (var i=0;i<followUp.length;i++){
    followUp[i].index=i;
    followUp[i].addEventListener("touchstart",function () {
        mandatoryBox.style.display="block";
    })
}
var ContactTui=document.querySelector(".Contact_Tui");
ContactTui.addEventListener("touchstart",function () {
    mandatoryBox.style.display="none";
})