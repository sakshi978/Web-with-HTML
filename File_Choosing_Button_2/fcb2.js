function upload() {
    var imgcanvas = document.getElementById("c1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}