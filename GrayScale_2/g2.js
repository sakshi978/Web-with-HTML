var image;

function upload() {
    var imgcanvas1 = document.getElementById("c1");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas1);
}

function makegray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas2 = document.getElementById("c2");
    image.drawTo(imgcanvas2);
}