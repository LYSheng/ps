
var mandatoryP=document.querySelectorAll(".mandatory_p");
var mandatory=document.querySelectorAll(".mandatory");
var menuInput=document.querySelectorAll(".menu_input");

for (var i=0;i<mandatoryP.length;i++){
    if (mandatoryP[i].hidden){
        mandatory[i].style.opacity= "1";
    }
}
// var muneButton=document.querySelector(".mune_button");
// var userv=[]
// muneButton.addEventListener("touchstart",function () {
//     for (var i=0;i<menuP.length;i++){
//         // console.log(menuInput[i])
//         if (menuP[i].hidden){
//             var index=menuInput[i].selectedIndex ;
//             // console.log(menuInput[i].value)
//             userv.push(menuInput[i].options[index].text)
//         }
//     }
//     console.log(userv)
// })