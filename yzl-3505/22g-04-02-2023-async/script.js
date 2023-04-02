"use strict";

const cartContainer = document.querySelector(".container");
const details = document.querySelector(".details");
const imgContainer = document.querySelector(".img-container");
const getUserBtn = document.getElementById("get-user-btn");
const url = "https://random-data-api.com/api/v2/users?response_type=json";

///////////////////////////////////////

const showError = function (msg) {
    cartContainer.insertAdjacentText("beforeend",msg)
};

const showUserData = function (data, className = "") {
  const html = `    <div class="card">
    <div class="img-container ${className}">
      <img src="${data.avatar}" class="profile-img " />
    </div>
    <div class="details">
      <h2>${data.first_name} ${data.last_name}</h2>
      <h3>${data.employment.title}</h3>
      <h4>${data.address.city}</h4>
    </div>
  </div>`;
  cartContainer.insertAdjacentHTML("beforeend", html);
};

// const getUserData = function () {
//   const request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.send();
//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     showUserData(data);
//   });
// };

// getUserData();

// //----------------Callback Hell başlangıç-----------------------
// setTimeout(() => {
//   console.log("1 saniye sonra");
//   setTimeout(() => {
//     console.log("2 saniye sonra");
//     setTimeout(() => {
//       console.log("3 saniye sonra");
//       setTimeout(() => {
//         console.log("4 saniye sonra");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//----------------Callback Hell Bitiş-----------------------

//-------------------Promise Başlangıç----------------------
// const request = fetch(url)
// console.log(request);

// const getUserData = function () {
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       showUserData(data);
//     });
// };

// const getUserData = function () {
//   fetch(url)
//     .then(
//       (response) => response.json(),
//       (error) => alert(error)
//     )
//     .then((data) => {
//       showUserData(data);
//       return fetch(url);
//     })
//     .then(
//       (response) => response.json(),
//       (error) => alert(error)
//     )
//     .then((data) => showUserData(data, "new-user"));
// };

const getUserData = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showUserData(data);
      return fetch(url);
    })
    .then((response) => response.json())
    .then((data) => showUserData(data, "new-user"))
    .catch((err) => showError(`${err.message} 🎃🎃`));
};

getUserBtn.addEventListener("click", getUserData);

//-------------------Promise Bitiş----------------------
