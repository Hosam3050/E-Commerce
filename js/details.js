var parent = document.getElementById('left');

var data =JSON.parse( localStorage.getItem('details'));
function getDetails(){
    var div1 = document.createElement('div');
      var img= document.createElement('img');
      img.src= data.thumbnail;
      div1.classList.add('left-img');
      img.className= ('left-img img');
      div1.append(img);
      parent.appendChild(div1);
  
}

var cart = JSON.parse(localStorage.getItem('add to cart')) || [];
var add = document.querySelector(".add");
add.addEventListener("click", function(){
  cart.push(data)
  localStorage.setItem('add to cart' , JSON.stringify(cart))
  window.location.href = "../cart.html";
})
  

