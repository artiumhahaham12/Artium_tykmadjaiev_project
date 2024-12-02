let stars_rating = "";
function addItem() {
  
  let products_place = document.getElementById("products");
  let name = document.getElementById("name").value || "";
  let price = document.getElementById("price").value || "";
  let about = document.getElementById("about-product").value;
  let stock = document.getElementById("stock-flag").checked ? 'on stock':'out stock';
  let category = document.getElementById("category").value;
  console.log(price.value);
  console.log(name == "" || price == "");
  
  if(name != "" || price != ""){
  products_place.innerHTML += `<tr><td>${name}</td>
                <td>${price}</td><td>${stars_rating}</td><td>${about}</td><td>${category}</td><td>${stock}</td></tr>`;
  document.getElementById("price").value = "";
  document.getElementById("name").value = "";
  document.getElementById("about-product").value = "";
  document.getElementById("stock-flag").value = "";
  document.getElementById("category").value = "";
  document.getElementById("stock-flag").checked = false;
  for (let index = 1; index < 6; index++) {
    document.getElementById(`${index}-star`).style.color = "black";
  }
  }
}

function stars(stars_num) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`${i}-star`).style.color = "black";
  }
  for (let i = 1; i <= stars_num; i++) {
    star = document.getElementById(`${i}-star`).style.color = "yellow";
  }
  stars_rating = stars_num;
}
