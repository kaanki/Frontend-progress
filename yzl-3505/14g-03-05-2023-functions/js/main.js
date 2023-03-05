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

// function meyveleriParcala(meyve, adet) {
//     return meyve === 'elmalar' ? adet * 4 : adet * 3;
// }

// function meyveIsleme(elmalar, portakallar) {
//     const elmaParcalari = meyveleriParcala('elmalar', elmalar);
//     const portakalParcalari = meyveleriParcala('portakallar', portakallar);
//     const meyveSuyu = `${elmaParcalari} elma ve ${portakalParcalari} portakal`
//     return meyveSuyu
// }

// console.log(meyveIsleme(2, 3))

// const toplama = (a, b) => a + b
// const cikarma = (a, b) => a - b
// const carpma = (a, b) => a * b
// const bolme = (a, b) => a / b

// const hesap = function (sayi1, sayi2, islem) {
//     return islem(sayi1, sayi2)
// }

// const ekle = hesap(10, 3, toplama)
// console.log(ekle)

// const yasHesap = function (dogumyili) {
//     return 2048 - dogumyili
// }

// const emeliligeKalanSure = function (dogumYili, ad) {
//     const yas = yasHesap(dogumYili)
//     const emeklilik = 65 - yas
//     return `Sayın ${ad}, 
//     ${emeklilik > 0 
//         ? `${emeklilik} yıl içinde emekli oluyor`
//         : `${emeklilik * -1} yıldır zaten emeklisiniz`
//     }`
//     // return `${ad} ${emeklilik} içinde emekli oluyor`
// }


// console.log(emeliligeKalanSure(1986, 'kaan'))
// console.log(emeliligeKalanSure(1970, 'ahmet'))
// -------------------Fonksiyonları Çağıran Diğer Fonksiyonlar Bitiş-------------------


const matHesap = function (sayi1, sayi2) {
    const birinci = sayi1 * 10
    const ikinci = sayi2 * 70
    return birinci,ikinci

}


