// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// User Profile Toggle
let userImg = document.querySelector(".user img");
let userProfile = document.querySelector(".profile");
userImg.onclick = function () {
  userProfile.classList.toggle("active");
};
``
function manageRoles() {
  alert("Redirecting to role management page...");
  // Here you would include the logic to redirect to or open the role management section.
}