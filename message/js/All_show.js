var AllShow=document.getElementById("All_show");
var mandatory=document.querySelectorAll(".mandatory");
var mandatoryP=document.getElementsByClassName("mandatory_p",AllShow);
for (var i=0;i<mandatoryP.length;i++){
    if (mandatoryP[i].hidden){
        mandatory[i].style.opacity= "1";
    }
}
// var arr = {
//     number: 5,
//     id:1,
//     projectName: '猫市梧州精选',
//     projectManager: '赵云',
//     CustomerName:'李三',
//     MobilePhone: '13633520565',
//     MessageContent:'对项目感兴趣，联系我',
// };


//预约回访客户详情必填判断  !!!明天做

var button=document.querySelector("#button");
var interest=document.querySelector("#interest");
var Allmoney=document.querySelector("#Allmoney");
var Tztime=document.querySelector("#Tztime");
var TzState=document.querySelector("#TzState");
var flag=true;
button.addEventListener("touchstart",function () {
    if (interest.value==0){
        interest.style.background="red"
        return false;
    }
    if (Allmoney.value==0){
        Allmoney.style.background="red"
        return false;
    }
    window.location.href="../js/index.html";

})
