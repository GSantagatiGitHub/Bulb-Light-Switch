function light(value) {
    var image;
    if (value == 0) {
    image = "https://www.w3schools.com/js/pic_bulboff.gif"; 
    } else {
    image = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
    document.getElementById('bulb').src=image;
}