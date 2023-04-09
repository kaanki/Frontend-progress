"use strict";

const cartContainer = document.querySelector(".container");
const details = document.querySelector(".details");
const imgContainer = document.querySelector(".img-container");
const getUserBtn = document.getElementById("get-user-btn");
const url = "https://random-data-api.com/api/v2/users";

///////////////////////////////////////

const showError = function (msg) {
  cartContainer.insertAdjacentText("beforeend", msg);
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

// const getUserData = function () {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Kullanıcı bulunamadı - " + response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       showUserData(data);
//       return fetch(data.baskent);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Kullanıcı bulunamadı - " + response.status);
//       }
//       response.json();
//     })
//     .then((data) => showUserData(data, "new-user"))
//     .catch((err) => showError(`${err.message} 🎃🎃`))
//     .finally(() => {
//       console.log("sitemize hoş geldiniz");
//     });
// };

const getJSON = function (url, errorMessage = `Bir şeyler ters gitti`) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} - ${response.message}`);
    return response.json();
  });
};

// const getUserData = function (url) {
//   getJSON(url, "Kullanıcı bulunamadı")
//     .then((data) => {
//       showUserData(data);
//       return getJSON(url, "ikinci Kullanıcı bulunamadı");
//     })
//     .then((data) => showUserData(data, "new-user"))
//     .catch((err) => showError(`${err.message} 🎃🎃`))
//     .finally(() => {
//       console.log("sitemize hoş geldiniz");
//     });
// };

// getUserBtn.addEventListener("click", function () {
//   getUserData(url);
// });

// const geoLocation = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=499855967162309543863x7033 `
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`GeoCoding ile ilgili problem`)
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`${data.country},${data.city}`);
//     }).catch(err => console.error(err.message));
// };

// geoLocation(41.0222, 28.196);

// ------------------- async başlangıç -------------------

const geoPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (location) => resolve(location),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getUserData = async function () {
  // Geolocation
  try {
    const location = await geoPosition();
    const { latitude: lat, longitude: lng } = location.coords;
    //Reverse GeoCoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=499855967162309543863x7033`
    );
    if (!resGeo.ok) throw new Error("Konum bulunamıyor.");
    const dataGeo = await resGeo.json();
    console.log(dataGeo.remaining_credits);
    //console.log(`${dataGeo.country}, ${dataGeo.city}`);
    //Users
    const res = await fetch(url);
    if (!res.ok) throw new Error("Kullanıcı bulunamıyor.");
    const data = await res.json();
    showUserData(data);
    return `${dataGeo.country}, ${dataGeo.city} 'dasınız`;
  } catch (err) {
    console.log(`Bir şeyler ters gitti 💣💣 ${err.message}`);
    showError(`Bir şeyler ters gitti 💣💣 ${err.message}`);
  }
};

// const city = getUserData();
//getUserData().
// then(city => console.log(`1: ${city}`))
// .catch((err) => console.log(`2: ${err.message}`))
// .finally(() => console.log(`3 konum alındı`))

//IIFE
// (async function () {
//   try {
//     const city = await //getUserData()
//     console.log(`1: ${city}`);
//   } catch (error) {
//     console.error(`${error.message}`)
//   }
//   console.log("3: Konum alındı");
// })();

const getThreeUser = async function (u1, u2, u3) {
  try {
    // const user1 = await getJSON(
    //   `https://jsonplaceholder.typicode.com/users/${u1}`
    // );
    // const user2 = await getJSON(
    //   `https://jsonplaceholder.typicode.com/users/${u2}`
    // );
    // const user3 = await getJSON(
    //   `https://jsonplaceholder.typicode.com/users/${u3}`
    // );

    //Promise.all
    const userData = await Promise.all([
      getJSON(`https://jsonplaceholder.typicode.com/users/${u1}`),
      getJSON(`https://jsonplaceholder.typicode.com/users/${u2}`),
      getJSON(`https://jsonplaceholder.typicode.com/users/${u3}`),
    ]);
    console.log(userData.map((d) => console.log(d.name)));
  } catch (err) {}
};
// getThreeUser(1, 2, 3);

//Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://jsonplaceholder.typicode.com/users/1`),
//     getJSON(`https://jsonplaceholder.typicode.com/users/3`),
//     getJSON(`https://jsonplaceholder.typicode.com/users/5`),
//   ]);
//   console.log(res);
// })();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("İstekler çok uzun sürdü"));
    }, sec);
  });
};

Promise.race([
  getJSON(`https://jsonplaceholder.typicode.com/users/1`),
  timeout(1000),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// ------------------- async bitiş -------------------

//-------------------Promise Bitiş----------------------
