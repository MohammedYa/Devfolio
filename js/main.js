var images =Array.from( document.querySelectorAll(".image"));
var layer= document.querySelector(".layerwork");
var work=document.querySelector(".work");
var navbar=document.querySelector(".navbar");
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var closse=document.querySelector(".close");
var nums=document.querySelectorAll(".num");
var section= document.querySelectorAll(".animation");
let started=false;// this var for stop and work function
var imagesrc;
var currentindex=0;

for(var x=0 ;x<images.length;x++){
    images[x].addEventListener("click",function(e){
    currentindex=images.indexOf(e.target);
    imagesrc= e.target.src;
    layer.style.display="flex";
    navbar.style.display="none";
    work.style.backgroundImage=`url(${imagesrc})`



    })
}



/* close function*/

function closeslide()
{
    layer.style.display="none";
    navbar.style.display="flex";
}
closse.addEventListener("click",closeslide)

/* next slide*/
next.addEventListener("click",NextSlide)
function NextSlide(){
    currentindex++;

    if(currentindex==images.length-1){
        currentindex=0

        
    }

        imagesrc=images[currentindex].src;
        work.style.backgroundImage=`url(${imagesrc})`

}

/* preveios slide*/
prev.addEventListener("click",PrevSlide);
function PrevSlide(){
    currentindex--;

    if(currentindex<0){
        currentindex=images.length-1

        
    }

        imagesrc=images[currentindex].src;
        work.style.backgroundImage=`url(${imagesrc})`

}

/* key board action*/
document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight"){
        NextSlide();
    }
    else if(e.key=="ArrowLeft"){
        PrevSlide()
    }
    else if(e.key=="Escape"){
        closeslide()
    }
})

//conter of number


let topoffset=$(".animation").offset().top

window.onscroll = function () {
    if(window.scrollY >= topoffset){
        if(!started){
        nums.forEach((num) =>startcount(num)); 
        }
        started=true;
    }
}
function  startcount(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal)
        {
            clearInterval(count);
        }
    },1000/goal)
}

//contact 
var inputs=document.querySelectorAll(".inp")
var sendmsg=document.getElementById("sendmsg");
sendmsg.addEventListener("click",function(){
  for(var i=0 ;i<inputs.length;i++){
      inputs[i].value=""
  }
})