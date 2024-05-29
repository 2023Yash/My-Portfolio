document.getElementById("year").textContent = new Date().getFullYear();

function responsiveFunctionTwo() {
    var x = document.getElementById("btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var modal = document.getElementById('log-in');

function pws() {
  var p = document.getElementById("myInput");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}