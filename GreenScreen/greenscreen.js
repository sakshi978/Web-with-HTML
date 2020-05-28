var fgImage = null;
var bgImage = null;
var imgcanvas1;
var imgcanvas2;

function loadforeground() {
    imgcanvas1 = document.getElementById("c1");
    var fileinput1 = document.getElementById("fgfile");
    fgImage = new SimpleImage(fileinput1);
    fgImage.drawTo(imgcanvas1);
}

function loadbackground() {
    imgcanvas2 = document.getElementById("c2");
    var fileinput2 = document.getElementById("bgfile");
    bgImage = new SimpleImage(fileinput2);
    bgImage.drawTo(imgcanvas2);
}

function calc() {
    var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
     
    for (var pixel of fgImage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if(pixel.getRed()>=(pixel.getGreen()+pixel.getBlue())){
            var bgPix = bgImage.getPixel(x,y);
            output.setPixel(x,y,bgPix);
        }
        else {
            output.setPixel(x,y,pixel);
        }
    }
    return output;
}

function doGreenScreen() {
    if ((fgImage==null) || (!fgImage.complete())) {
        alert("Foreground Image is not loaded");
    }
    if ((bgImage==null) || (!bgImage.complete())) {
        alert("Background Image is not loaded");
    } 
    clearcanvas();
    var finalImage = calc();
    finalImage.drawTo(imgcanvas1);
}

function clearcanvas() {
    doclear(imgcanvas1);
    doclear(imgcanvas2);
}

function doclear(canvas) {
    var context = canvas.getContext("2d");

    context.clearRect(0,0,canvas.width,canvas.height);
}