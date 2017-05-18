var AllInput=document.querySelector(".All_input");
var tdCheckbox=document.querySelectorAll(".td_checkbox");
AllInput.addEventListener("blur",function () {
    if (AllInput.checked){
        for (var i=0;i<tdCheckbox.length;i++){
            tdCheckbox[i].checked=true;
        }
    }else{
        for (var i=0;i<tdCheckbox.length;i++){
            tdCheckbox[i].checked=false;
        }
    }
});

