//use scri
"use strict";

// function yasHesap(dogumYili) {
//   const yas = 2040 - dogumYili;
//   function yasYazdir() {
//     let output = `${isim} ${dogumYili} dogumlu  ${yas} yasinda`;
//     console.log(output);
//     if (dogumYili >= 1981 && dogumYili <= 1996) {
//       var millenial = true;
//       // Dış kapsamdaki değişken ile aynı isme sahip değişken oluşturma
//       const isim = "Namık";
//       // Dış kapsamdaki değişkene yeniden atama
//       output = "yeni çıktı";
//       const str = `${isim} Y kusaginda dogmussun`;
//       console.log(str);
//       function ekle(a, b) {
//         return a + b;
//       }
//     }
//     console.log(output);
//   }
//   yasYazdir();
//   return yas;
// }

// const isim = "Murat";

// yasHesap(1986);

// --------------------Hoisting & TDZ(Temporal Dead Zone) Başlangıç--------------
// Değişkenlerde hoisting

// console.log(ben);
//console.log(iş);
//console.log(yil);

// var ben = "Murat";
// let iş = "Öğretmen";
// const yil = 1986;

// Fonksiyonlarda hoisting

// console.log(ekleme(1,1));
//console.log(toplama(1+1));
//console.log(birikim(1+1));

// function ekleme(a, b) {
//   return a + b;
// }

// const toplama = function (a, b) {
//   return a+b
// };

// const birikim = (a, b) => a + b;

// var x = 1
// let y =2
// const z = 3


// --------------------Hoisting & TDZ(Temporal Dead Zone) Bitiş--------------
// --------------------this başlangıç--------------

const murat ={
  isim:'Murat',
  yil:1986,
  yasHesap: function () {
    return 2040 - this.yil
  },
}

console.log(murat.yasHesap());


// --------------------this bitiş--------------
