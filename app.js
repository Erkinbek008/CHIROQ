function light(show){
    let pic;
    if (show == 0){
        pic = "https://www.w3schools.com/js/pic_bulboff.gif";
    }else{
        pic = "https://www.w3schools.com/js/pic_bulbon.gif"
    }
    document.getElementById('bulb').src = pic;

}
