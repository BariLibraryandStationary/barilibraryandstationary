var i = 0;
var images = [];
var time = 3000;

images[0] = 'image/Al Quran.jpg'
images[1] = 'image/Guide Book.jpg'
images[2] = 'image/Stationary.jpg'
images[3] = 'image/Note Books.jpg'
images[4] = 'image/Decoration Items.png'
images[5] = 'image/Toy Stationary.png'


function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }


setTimeout("changeImg()", time)
}

window.onload = changeImg;



x = 1;
function abc(){
    if(x==1) {
        document.getElementById("awesome").innerHTML="Al Quran";
    }
    if(x==2) {
        document.getElementById("awesome").innerHTML="Guide Book";
    }
    if(x==3) {
        document.getElementById("awesome").innerHTML="Stationary Items";
    }
    if(x==4) {
        document.getElementById("awesome").innerHTML="Notebooks";
    }
    if(x==5) {
        document.getElementById("awesome").innerHTML="Decoration Items";
    }
    if(x==6) {
        document.getElementById("awesome").innerHTML="Toy Stationary ";
    }
x++;
if(x>=7) {
    x=1; 
}
setTimeout("abc()", 3000)
}
abc();
