'use strict'


// ----------------------------Function Başlangıç----------------------------------


function logger() {
    console.log('Benim adım kaan');
}


// calling/running/invoking
// logger();

// function meyveIsleme(elmalar, portakallar) {
//     console.log(elmalar, portakallar);
//     const meyveSuyu = `${elmalar} elma ve ${portakallar} portakal`
//     return meyveSuyu;
// }

// const elmasuyu = meyveIsleme(5, 0);
// console.log(elmasuyu);
// console.log(meyveIsleme(5, 0))
// const portakalSuyu = meyveIsleme(2, 4)

// DRY ---> Don't repeat yourself

// const num = Number('23')
// console.log(num);

// ----------------------------Function Bitiş----------------------------------

// -------------------Function Expression & Declaration Başlangıç-------------------

// Declaration
// function yasHesap1(dogumYili) {
//     return 2040 - dogumYili;
// }

// const yas1 = yasHesap1(1986);
// console.log(yas1);


// //expression
// const yasHesap2 = function (dogumYili) {
//     return 2040 - dogumYili
// }

// const yas2 = yasHesap2(1986)
// console.log(yas2, yas1);


// -------------------Function Expression & Declaration Bitiş-------------------

// -------------------Arrow Functions Başlangıç-------------------

// //expression
// const yasHesap2 = function (dogumYili) {
//     return 2040 - dogumYili
// }

// // Arrow Function
// const yasHesap3 = (dogumYili) => 2040 - dogumYili
// const yas3 = yasHesap3(1986)
// console.log(yas3)
// this almaz
// const emeliligeKalanSure = (dogumYili, ad) => {
//     const yas = 2048 - dogumYili
//     const emeklilik = 65 - yas
//     return `${ad} ${emeklilik} içinde emekli oluyor`
// }

// console.log(emeliligeKalanSure(1994, "kaan"))

// -------------------Arrow Functions Bitiş-------------------

// -------------------Fonksiyonları Çağıran Diğer Fonksiyonlar Başlangıç-------------------

function meyveleriParcala(meyve) {
    return meyve * 4;
}

function meyveIsleme(elmalar, portakallar) {
    const elmaParcalari = meyveleriParcala(elmalar);
    const portakalParcalari = meyveleriParcala(portakallar);
    const meyveSuyu = `${elmaParcalari} elma ve ${portakalParcalari} portakal`
    return meyveSuyu
}

console.log(meyveIsleme(2, 3))

// -------------------Fonksiyonları Çağıran Diğer Fonksiyonlar Bitiş-------------------