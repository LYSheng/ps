var tdTell=document.querySelectorAll(".td_tell");
var tdTellCha=document.querySelectorAll(".td_tell_cha");
var ko=document.querySelector(".ko");
var str1,str2;
var arr=[];
for (var i=0;i<tdTell.length;i++){
    str1=tdTell[i].innerHTML;
    tdTell[i].href="tel:"+str1;
     str2 = str1.substr(0,3)+"****"+str1.substr(7);
    tdTell[i].innerHTML=str2;
    arr.push(str1);
};
for (var i=0;i<tdTellCha.length;i++){
    tdTellCha[i].index=i;
    tdTellCha[i].addEventListener("touchend",function () {
        tdTell[this.index].innerHTML=arr[this.index];
        this.innerHTML=""
    });
}
