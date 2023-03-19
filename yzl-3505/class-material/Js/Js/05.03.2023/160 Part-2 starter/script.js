'use strict'

// let ehliyetiVarMı = false

// const testiGeçti = true

// if (testiGeçti) ehliyetiVarMı = true

// if (ehliyetiVarMı) console.log('Araba kullanabilirim')

// const interface = "ses"
// const private = 123
// const if = 234

// -----------Function Başlangıç-----------------------

// function logger() {
//   console.log('Benim adım Murat')
// }

//calling/running/invoking
// logger(23)
// logger()
// logger()
// logger()

// function meyveİşleme(elmalar, portakallar) {
//   console.log(elmalar, portakallar)
//   const meyveSuyu = `${elmalar} elma ve ${portakallar} portakal`
//   return meyveSuyu
// }

// const elmaSuyu = meyveİşleme(5, 0)
// console.log(elmaSuyu)
// console.log(meyveİşleme(5, 0))
// const portakalSuyu = meyveİşleme(2, 4)
// console.log(portakalSuyu);

// DRY-- -> Don't repeat yourself

// const num = Number('23')

// -----------Function Bitiş---------------------------

// ---------------Function Expression & Declaration Başlangıç----------------

// //Declaration
// const yaş1 = yaşHesap1(1986)

// function yaşHesap1(doğumYılı) {
//   return 2040 - doğumYılı
// }

// // console.log(yaş1)

// // Expression
// const yaşHesap2 = function (doğumYılı) {
//   return 2040 - doğumYılı
// }
// const yaş2 = yaşHesap2(1986)

// console.log(yaş2, yaş1)

// ---------------Function Expression & Declaration Bitiş---------------------
// ---------------Arrow Function Başlangıç------------------------------------

// Expression
// const yaşHesap2 = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

//Arrow Function

// const yaşHesap3 = (doğumYılı) => 2040 - doğumYılı
// const yaş3 = yaşHesap3(1986)
// console.log(yaş3)
// this almaz
// const emekliliğeKalanSüre = (doğumYılı, ad) => {
//   const yaş = 2048 - doğumYılı
//   const emeklilik = 65 - yaş
//   // return emeklilik
//   return `${ad}, ${emeklilik} içinde emekli oluyor`
// }

// console.log(emekliliğeKalanSüre(1993, 'Kamil'))
// console.log(emekliliğeKalanSüre(1986, 'Murat'))
// ---------------Arrow Function Bitiş----------------------------------------
// ---------------Fonksiyonları Çağıran Diğer Fonksiyonlar Başlangıç----------------------------------------

// function meyveleriParçala(meyve, adet) {
//   return meyve === 'elmalar' ? adet * 4 : adet * 3
// }

// function meyveİşleme(elmalar, portakallar) {
//   const elmaParçaları = meyveleriParçala('elmalar', elmalar)
//   const portakalParçaları = meyveleriParçala('portakallar', portakallar)
//   const meyveSuyu = `${elmaParçaları} elma ve ${portakalParçaları} portakal`
//   return meyveSuyu
// }

// console.log(meyveİşleme(2, 3))

// const toplama = (a, b) => a + b
// const çıkarma = (a, b) => a - b
// const çarpma = (a, b) => a * b
// const bölme = (a, b) => a / b

// const hesap = function (sayı1, sayı2, işlem) {
//   return işlem(sayı1, sayı2)
// }

// const ekle = hesap(10, 3, toplama)

// const yaşHesap = function (doğumYılı) {
//   return 2048 - doğumYılı
// }

// const emekliliğeKalanSüre = function (doğumYılı, ad) {
//   const yaş = yaşHesap(doğumYılı)
//   const emeklilik = 65 - yaş
//   return `Sayın ${ad},
//    ${
//      emeklilik > 0
//        ? `${emeklilik} yıl içinde emekli oluyor`
//        : `${emeklilik * -1} yıldır zaten emeklisiniz`
//    }`
// return `${ad}, ${emeklilik} içinde emekli oluyor`
// }

// console.log(emekliliğeKalanSüre(1986, 'Murat'))
// console.log(emekliliğeKalanSüre(1950, 'Namık'))

// const matHesap = function (sayı1, sayı2) {
//   const birinci = sayı1 * 10
//   const ikinci = sayı2 * 20
//   return [birinci, ikinci]
// }

// console.log(matHesap(5, 7))

// ---------------Fonksiyonları Çağıran Diğer Fonksiyonlar Bitiş----------------------------------------
