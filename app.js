console.log("Javascript connected");

let userEmail = "hitesh@gmail.com";
let userpassword = "1234";
let userEmailInput = document.getElementById("email");
let userpasswordInput = document.getElementById("password");

function btnfn() {
  let userEmailValue = userEmailInput.value;
  let userpasswordValue = userpasswordInput.value;
  if (userEmailValue == userEmail && userpasswordValue === userpassword) {
    window.location.href = "home.html";
  } else {
    alert("invalid password");
  }
}

const productsLine1 = [
  { name: "shirt With double tap", price: 1400, rating: 4.5, img: "/Assets/images/shirt1.png" },
  { name: "shirt with blackcolor", price: 1420, rating: 4.0, img: "/Assets/images/shirt-2.png" },
  { name: "pant double tap",       price: 1300, rating: 3.5, img: "/Assets/images/pant-1.png" },
  { name: "shirt with style",      price: 1100, rating: 5.0, img: "/Assets/images/shirt-3.png" },
];

const container = document.querySelector(".item-box5");

productsLine1.forEach((productsLine1) => {
  const card = document.createElement("div");
  card.setAttribute("class", "product-card");

  const img = document.createElement("img");
  img.setAttribute("src", productsLine1.img);  
  img.setAttribute("alt", productsLine1.name);

  const name = document.createElement("p");
  name.innerText = productsLine1.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(productsLine1.rating)) + ` ${productsLine1.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + productsLine1.price + "$";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(stars);
  card.appendChild(price);

  container.appendChild(card);
});
const productsLine2 = [
  { name: "shirt With double tap", price: 1400, rating: 4.5, img: "/Assets/images/shirt-3.png" },
  { name: "pant with blackcolor", price: 1420, rating: 4.0, img: "/Assets/images/pant-1.png" },
  { name: "pant double tap",       price: 1300, rating: 3.5, img: "/Assets/images/pant-2.png" },
  { name: "shirt with style",      price: 1100, rating: 5.0, img: "/Assets/images/shirt-4.png" },
];

const containerTwo = document.querySelector(".item-box8");

productsLine2.forEach((productsLine2) => {
  const card = document.createElement("div");
  card.setAttribute("class", "product-card");

  const img = document.createElement("img");
  img.setAttribute("src", productsLine2.img);  
  img.setAttribute("alt", productsLine2.name);

  const name = document.createElement("p");
  name.innerText = productsLine2.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(productsLine2.rating)) + ` ${productsLine2.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + productsLine2.price + "$";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(stars);
  card.appendChild(price);

  containerTwo.appendChild(card);
});