"use strict";

const cartContainer = document.querySelector(".container");
const details = document.querySelector(".details");
const imgContainer = document.querySelector(".img-container");
const getUserBtn = document.getElementById("get-user-btn");
const url = "https://random-data-api.com/api/v2/users";

///////////////////////////////////////

// --------------------- Event Loop Başlangıç ---------------------

// console.log("Test Başlasın");

// setTimeout(() => console.log("0 saniye zamanlayıcı"), 0);

// Promise.resolve("çözülmüş promise 1").then((res) => console.log(res));

// Promise.resolve("çözülmüş promise 2").then((res) => {
//   for (let index = 0; index < 10000000000; index++) {}
//   console.log(res);
// });

// console.log("Test bitti");

// const piyangoUmudu = new Promise(function (resolve, reject) {
//   console.log("Bugün çekiliyor");
//   setTimeout(() => {
//   if (Math.random() >= 0.5) {
//     resolve("Kazandınız 🌹🌹🌹");
//   } else {
//     reject(new Error("Kaybettiniz 💣💣💣"));
//   }

//   }, 2000);
// });

// piyangoUmudu.then(res => console.log(res)).catch(err => console.error(err.message))

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("2 saniye bekledin");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("1 saniye bekledin");
//     return wait(1);
//   })
//   .then(() => console.log("1 saniye daha geçti"));

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject("def").catch((x) => console.error(x));

const geoLocation = function () {
  geoPosition()
    .then((konum) => {
      const { latitude: lat, longitude: lng } = konum.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=499855967162309543863x7033 `
      );
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`GeoCoding ile ilgili problem`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`${data.country},${data.city}`);
    })
    .catch((err) => console.error(err.message));
};

console.log("Konum öğrenme");

const geoPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (location) => resolve(location),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getUserBtn.addEventListener("click", geoLocation);
// --------------------- Event Loop Bitiş ---------------------
