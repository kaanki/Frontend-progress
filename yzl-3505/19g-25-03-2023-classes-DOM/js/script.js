// ----------------------------- class başlangıç -----------------------------

//const car = new Car({ title: "Togg" });

//console.log(car.driver());

// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.driver = function () {
//     return "Namık";
//   };

// function Audi(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Audi.prototype = Object.create(Car.prototype)
// Audi.prototype.constructor = Audi
// Audi.prototype.year = function () {
//     return 2020
// }
// const audi = new Audi({ color: "red", title: "kiralık" });
// console.log(audi);
// console.log(audi.driver());
// console.log(audi.year());

// class Car {
//   constructor({ title }) {
//     this.title = title;
//   }
//   driver() {
//     return "Namık";
//   }
// }

// // const car = new Car({ title: "Audi" });
// // console.log(car);

// class Audi extends Car {
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   year() {
//     return 2020;
//   }
// }

// const audi = new Audi({ color: "red", title: "kiralık" });
// console.log(audi.year());
// console.log(audi.driver());
// console.log(audi);

//----------------------------- class bitiş -----------------------------
//----------------------------- DOM Başlangıç -----------------------------

// const button = document.getElementById("change");
// button.addEventListener("click", function () {
//   document.body.style.backgroundColor = "purple";
// });

// const button2 = document.getElementById("change2");
// button2.addEventListener("dblclick", function () {
//   document.body.style.backgroundColor = "red";
// });

// const button3 = document.getElementById("change3");
// button3.addEventListener("mouseenter", function () {
//   document.body.style.backgroundColor = "green";
// });

// const button4 = document.getElementById("change4");
// button4.addEventListener("mouseout", function () {
//   document.body.style.backgroundColor = "gray";
// });

//----------------------------- DOM Bitiş -----------------------------
