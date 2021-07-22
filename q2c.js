function subtractNum() {
  let a, b, z;
  a = document.getElementById("myNum1").value;
  b = document.getElementById("myNum2").value;
  z = a - b;
  document.getElementById("answersub").innerHTML = z ;
}

function clr() {
    // window.alert("jeya")
    document.getElementById("myNum1").value = "";
    document.getElementById("myNum2").value = "";
    document.getElementById("answersub").innerHTML = "";
}
