window.onload = function(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("heure").innerHTML = time;
}

setInterval(function() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("heure").innerHTML = time;
}, 1 * 1000); // 60 * 1000 milsec

function ShowValue(caller, y) {

    var CarList = document.getElementById("CarList");
    var CarListc = CarList.children;

    val = caller.value;

  switch (y) {
      case 1:
          document.getElementById("Price").innerHTML = val;
          var x;
          for (x = 0; x < CarListc.length; x++) {
              if (parseInt(GetPrice(x)) > val) {
                  CarListc[x].style.display = "none";
              } else {
                  CarListc[x].style.display = "";
              }
          }
    default:

  }
}

function GetPrice(x) {
    var CarList = document.getElementById("CarList");
    var CarListc = CarList.children;
    var price = CarListc[x].children;
    var price2 = price[1].children;
    var price3 = price2[0].innerHTML;
    return price3;
}

function CloseForm(){
  document.getElementById("ExitBox").style.display = "none";
  document.getElementById("ContactForm").style.opacity = 0;
  document.getElementById("ManifacturerBox").style.opacity = 0;
}


function OpenForm(){
  document.getElementById("ExitBox").style.display = "inherit";
  document.getElementById("ContactForm").style.opacity = 1;
}

function OpenMan(){
  document.getElementById("ExitBox").style.display = "inherit";
  document.getElementById("ManifacturerBox").style.opacity = 1;
}
