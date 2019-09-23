var imgList = document.querySelectorAll(".img-item");
var lightBoxContainer = document.querySelector(".lightBoxContainer") ;
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var lightBox = document.querySelector(".lightBox");
var imgArray = [];
var currentIndex = 0 ;

function nextFun() {
    currentIndex = currentIndex+1;
    if(currentIndex >= imgList.length){
        currentIndex = 0;
    }
    var nextImgPath = imgList[currentIndex].src;
    lightBox.style.backgroundImage = "url('"+ nextImgPath +"')"
}
function prevFun(){
    currentIndex = currentIndex-1;
    if(currentIndex < 0 ){
        currentIndex = imgList.length-1
    }
    var prevImgPath = imgList[currentIndex].src;
    lightBox.style.backgroundImage = "url('"+ prevImgPath +"')" 
}

for(var i = 0 ; i < imgList.length ; i++){
    imgArray.push(imgList[i])

    imgList[i].addEventListener("click",function(ev){
        currentIndex = imgArray.indexOf(ev.target);

        var imgPath = ev.target.src;
        lightBox.style.backgroundImage= "url('"+ imgPath +"') "
        lightBoxContainer.classList.add("show")
    })
}
close.addEventListener("click",function(){
    lightBoxContainer.classList.remove("show")
})
next.addEventListener("click",function(){
    nextFun()
})
prev.addEventListener("click",function(){
    prevFun()
})
document.addEventListener("keydown",function(ev){
    if(ev.keyCode == 39){
        nextFun()
    } else if (ev.keyCode == 37) {
        prevFun()
    } else if (ev.keyCode == 27) {
        lightBoxContainer.classList.remove("show")
    }
})