var LyMa=document.querySelector("#LyMa");
var XmId=document.querySelector("#XmId");
var KhSj=document.querySelector("#KhSj");
var LyTime=document.querySelector("#LyTime");
function filter(fn) {
    var list = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].rows;
    var size = list.length;
    var tr;
    for(var i = 0; i < size; i++) {
        tr = list[i];
        tr.removeAttribute('class', 'hide')
        if(!fn(tr)) {
            tr.setAttribute('class', 'hide');
        }
    }
}
function search() {
    var Bm = document.getElementById('Bm').value;
    var Jl = document.getElementById('Jl').value;
    var LyBm = document.getElementById('LyBm').value;
    var Kh = document.getElementById('Kh').value;
    var Ks = document.getElementById('Ks').value;
    var Js = document.getElementById('Js').value;
    filter(function(tr) {
        if(LyBm && tr.cells[LyMa.cellIndex].innerHTML.indexOf(LyBm) < 0) {
            return false;
        }
        if(Bm && tr.cells[XmId.cellIndex].innerHTML.indexOf(Bm) < 0) {
            return false;
        }

        if(Jl && tr.cells[XmJl.cellIndex].innerHTML.indexOf(Jl) < 0) {
            return false;
        }
        if(Kh && tr.cells[KhSj.cellIndex].innerHTML.indexOf(Kh) < 0) {
            return false;
        }
        if(Ks && tr.cells[LyTime.cellIndex].innerHTML.indexOf(Ks) < 0) {
            return false;
        }
//            if(Js && tr.cells[XmName.cellIndex].innerHTML.indexOf(Js) < 0) {
//                return false;
//            }
        return true;
    });
}