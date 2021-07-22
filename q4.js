function calcVolume() {
    var l, w, h;
   l = document.getElementById("length").value;
   w = document.getElementById("width").value;
   h = document.getElementById("height").value;
   v = l * w * h;
    document.getElementById("answerq4").innerHTML = "Volume of the cuboid = " + v;
};

function clr() {
    // window.alert("jeya")
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";

    document.getElementById("answerq4").innerHTML = "";

};
