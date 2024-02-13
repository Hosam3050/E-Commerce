

$('.introduction-text').fadeOut(1000,function(){
    
})
$('.introduction-text').fadeIn(1000,function(){

})



/*-----------------------------Sign up & Loge in --------------------------*/

function signup() {
  var user = document.getElementById('user').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;

  localStorage.setItem('user', user);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  if (user.length < 4) {
    document.getElementById('user').style.border = '3px solid red';
    return;
  } else {
    document.getElementById('user').style.border = '3px solid green';
  }

  if (email.length < 7 || email.indexOf("@") == -1) {
    document.getElementById('email').style.border = '3px solid red';
    return;
  } else {
    document.getElementById('email').style.border = '3px solid green';
  }

  if (password.length < 8) {
    document.getElementById('pass').style.border = '3px solid red';
    return;
  } else {
    document.getElementById('pass').style.border = '3px solid green';
  }

  location.assign('../login.html');

}


// -----------------------------------------------------------------------------

function login() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  //   if (
//     localStorage.getItem("email") == email &&
//     localStorage.getItem("password") == password &&
//     localStorage.getItem("user") == user
//   ) {
//     alert(`welcome ${user}`);
//     window.location.href = "../index.html";
//     //localStorage.clear();
//   } else {
//     alert("wrong");
//   }
// }


localStorage.getItem("email") == email && localStorage.getItem("password") == password && localStorage.getItem("user") == user? 
(function(){
  alert(`wellcome ${user} `);
  location.replace("../index.html");
})(): alert("wrong");
}

/*---------------------------------------------------------------------*/

function getDataFromDB() {
  var prodcuts = {
    products: [
      {
        id: 1,
        title: "Half Running Set",
        price: "$100 - $129",
        brand: "sale",
        category: "Half Running",
        thumbnail:
          "../images/img-15.jpg",
      },
      {
        id: 2,
        title: "Running Set",
        price: "$99 - $120",
        brand: "sale",
        category: "Half Running",
        thumbnail:
          "../images/img-12.webp",
      },
      {
        id: 3,
        title: "Formal Men",
        price: "$85 - $110",
        brand: "sale",
        category: "Formal Lowers",
        thumbnail:
          "../images/img-16.jpg",
      },
      {
        id: 4,
        title: "Men Lowers",
        price: "$112 - $225",
        brand: "sale",
        category: "Formal Lowers",
        thumbnail:
          "../images/img-2.jpg",
      },
      {
        id: 5,
        title: " Jeans Flox ",
        price: "$118 - $240",
        brand: "sale",
        category: "Flix Flox",
        thumbnail:
          "../images/img-11.jpg",
      },
      {
        id: 6,
        title: "Flix Flox",
        price: "$200 - $300",
        brand: "sale",
        category: "Flix Flox",
        thumbnail:
          "../images/img-10.jpg",
      },
      {
        id: 7,
        title: "Fancy Salwar Suits",
        price: "$77 - $117",
        brand: "sale",
        category: "Fancy Salwar",
        thumbnail:
          "../images/img-7.webp",
      },
      {
        id: 8,
        title: "Salwar Suits",
        price: "$65 - $329",
        brand: "sale",
        category: "Fancy Salwar",
        thumbnail:
          "../images/img-8.png",
      },
      {
        id: 9,
        title: "Suits Salwar ",
        price: "$109 - $429",
        brand: "sale",
        category: "Fancy Salwar",
        thumbnail:
          "../images/img-9.jpg",
      },
    ],
  };
  return prodcuts.products;
}

var products = getDataFromDB();
var parent = document.getElementById("photo-b");
function cards(prodcut) {
  var div1 = document.createElement("div");
  var img = document.createElement("img");
  var h3 = document.createElement("h3");
  var span = document.createElement("span");
  var btn = document.createElement("button");
  img.src = prodcut.thumbnail;
  h3.innerText = prodcut.title;
  span.innerText = prodcut.price;
  btn.innerText = "Details";
  div1.append(img, h3, span, btn);
  parent.appendChild(div1);

  div1.className = "";
  div1.setAttribute("data-aos", "flip-left");
  div1.setAttribute("data-aos-easing", "ease-out-cubic");
  div1.setAttribute("data-aos-duration", "2000");
  img.className = "photo_div img";
  h3.className = "h3";
  span.className = "span";
  btn.className = "photo_div div btn";

  btn.onclick = function () {
    // cart.push(prodcut);
    localStorage.setItem("details", JSON.stringify(prodcut));
    window.location.href = "../details.html";
  };
}

function show() {
  // document.getElementById("photo-b").innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    cards(products[i]);
  }
}


// ----------------------------------- SearchItem ------------------------------------------------------

function SearchItem() {
  var search = document.getElementById("Search_Input");
  document.getElementById("photo-b").innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
        cards(products[i]);
}
  } 

}

// ---------------------------------- Sort -------------------------------------------------------

products.sort((a,b) => {
a.price - b.price;
});



