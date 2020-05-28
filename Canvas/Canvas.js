function doOrange() {
    var d1 = document.getElementById("c1");

    d1.className="orangeback";
}
function doBlue() {
    var canvas = document.getElementById("c1");
    canvas.style.backgroundColor="blue";

    var context = canvas.getContext("2d");
    context.fillStyle="yellow";
    context.fillRect(10,10,40,40);
    context.fillRect(60,10,40,40);

    context.fillStyle="black";
    context.font="30px Arial";
    context.fillText("Hello",15,105);
}
function doRed() {
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");

    context.clearRect(0,0,canvas.width,canvas.height);
    canvas.style.backgroundColor="red";
}