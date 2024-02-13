let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");

let a =1 ;
plus.addEventListener("click", function(){
  a++;
  if(a < 10){
    a = "0" + a;
    
  }else{
    a;
  }
  num.innerHTML = a;
});

minus.addEventListener("click", ()=>{
  if(a>1){
    a--;
    if(a<10){
      a = "0" + a;
    }else{
      a;
    }
  }
  num.innerHTML = a;
});

///////////////////////////////////////////////////////////////////////////

var  smallImg = document.getElementsByClassName("small-img");
var  bigImg = document.getElementById("big-img");


for (var i=0 ; i<smallImg.length ; i++){
  // console.log(this)
  
  smallImg[i].onclick=function(){
    var src = this.getAttribute('src');
    bigImg.src = src;
  }
  
}
////////////////////////////////////////////////////////////////////////////
var border = document.getElementsByClassName("small-img");

// console.log(border1)
// console.log(border2)

border[0].addEventListener("click", function (){
  border[0].style.border="1px solid black"
  border[1].style.border="none"
  
})
border[1].addEventListener("click", function (){
  border[1].style.border="1px solid black"
  border[0].style.border="none"
})

/////////////////////////////////////////////////////////////////////////

let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");

function ShowImg(){
  for (var i=0 ; i<smallImg.length ; i++){
    var src = smallImg[1].getAttribute('src');
    bigImg.src = src;
  }
}
function ShowImg2(){
  for (var i=0 ; i<smallImg.length ; i++){
    var src = smallImg[0].getAttribute('src');
    bigImg.src = src;
  }
}
///////////////////////////////////////////////////////////////////////////




