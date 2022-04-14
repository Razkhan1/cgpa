var plusbtn = document.getElementById('plus');
plusbtn.onclick = function(){
var firstnumber = Number(document.getElementById('fn').value);
var secondnumber = Number(document.getElementById('sn').value);
var result = firstnumber + secondnumber;

document.getElementById('res').value = result;
}

var minusbtn = document.getElementById('minus');
minusbtn.onclick = function(){
     var firstnumber = Number(document.getElementById('fn').value);
     var secondnumber = Number(document.getElementById('sn').value);
     var result = firstnumber - secondnumber;

     document.getElementById('res').value = result;
} 