function doYellow() {
    var dd1 = document.getElementById("c1");

    dd1.className="yellowback";
}

function doChange() {
    var dd1 = document.getElementById("c1");
    var colorinput = document.getElementById("clr");
    var color = colorinput.value;
    dd1.style.backgroundColor=color;
}