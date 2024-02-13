var parent2 = document.getElementById("products");

function getCart() {
  var data = JSON.parse(localStorage.getItem("add to cart"));
  for (let i = 0; i < data.length; i++) {
    var div1 = document.createElement("div");
    var img = document.createElement("img");
    var div2 = document.createElement("div");
    var h3 = document.createElement("h3");
    var h2 = document.createElement("h2");
    var span = document.createElement("span");
    img.src = data[i].thumbnail;
    h3.innerText = data[i].title;
    h2.innerText = data[i].price;
    span.innerHTML = "<i class='fa-solid fa-trash-can'></i> " + " remove";
    div1.append(img);
    div2.append(h3, h2, span);
    div1.append(div2);
    parent2.appendChild(div1);
    div1.classList.add("product");
    div1.classList.add("product:hover");
    img.className = "product img";
    img.className = "product img:hover";
    div2.classList.add("product-info");
    h3.className = "product-info h3";
    span.classList.add("product-remove");



    span.onclick = function () {
      data.splice(i, 1);
      localStorage.setItem("add to cart", JSON.stringify(data));
      location.reload();
    };
  }
}

function removeall() {
  localStorage.clear();
  location.reload();
}
