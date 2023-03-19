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
// ---------------Challenge 29 Başlangıç-----------------

// const ortHesap = (a, b, c) => (a + b + c) / 3
// console.log(ortHesap(3, 4, 5))

// const kaplanSkor = ortHesap(44, 23, 71)
// const kobraSkor = ortHesap(65, 54, 49)
// console.log(kaplanSkor, kobraSkor)

// const kazananKim = function (ortKaplanlar, ortKobralar) {
//   if (ortKaplanlar >= 2 * ortKobralar) {
//     console.log(`Kaplanlar kazandı (${ortKaplanlar} vs ${ortKobralar}) `)
//   } else if (ortKobralar >= 2 * ortKaplanlar) {
//     console.log(`Kobralar kazandı (${ortKobralar} vs ${ortKaplanlar}) `)
//   } else {
//     console.log(`Kimse kazanamadı`)
//   }
// }

// kazananKim(kaplanSkor, kobraSkor)
// kazananKim(100, 50)
// ---------------Challenge 29 Bitiş-----------------------
// ---------------Array Başlangıç-----------------------

// const arkadaş1 = 'Namık'
// const arkadaş2 = 'Engin'
// const arkadaş3 = 'Eda'

// const arkadaş = ['Namık', 'Engin', 'Eda']
// console.log(arkadaş)
// console.log(arkadaş[0])
// console.log(arkadaş[2])
// console.log(arkadaş.length)
// console.log(arkadaş[arkadaş.length - 1])

// arkadaş[2] = 'Ela'
// console.log(arkadaş)
// // arkadaş = ['Sema', 'Ali']
// const ad = 'Murat'

// const murat = [ad, 'Akdağ', 2040 - 1986, 'öğretmen', arkadaş]
// console.log(murat)
// console.log(murat.length)

// const yaşHesap = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

// const yıllar = [1986, 2004, 2008, 2020]
// const yaş1 = yaşHesap(yıllar[0])
// const yaş2 = yaşHesap(yıllar[1])
// const yaş3 = yaşHesap(yıllar[2])
// const yaş4 = yaşHesap(yıllar[yıllar.length - 1])

// // console.log(yaş1, yaş2, yaş3, yaş4)
// const yaşlar = [
//   yaşHesap(yıllar[0]),
//   yaşHesap(yıllar[1]),
//   yaşHesap(yıllar[2]),
//   yaşHesap(yıllar[yıllar.length - 1]),
// ]
// console.log(yaşlar)

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ]
// console.log(arr[1][1])

// const yıl = new Array(1986, 2004, 2008, 2020)
// ---------------Array Bitiş---------------------------
// ---------------Array Methods Başlangıç---------------------------

// Element Ekleme

// const arkadaş = ['Namık', 'Engin', 'Eda']

// const yeniUzunluk = arkadaş.push('Ela')
// console.log(arkadaş)
// console.log(yeniUzunluk)

// arkadaş.unshift('Yavuz')
// console.log(arkadaş)

// // Element Kaldırma
// const kaldırılan = arkadaş.pop()
// console.log(kaldırılan)
// arkadaş.shift()
// console.log(arkadaş)
// console.log(arkadaş.indexOf('Engin'))
// console.log(arkadaş.indexOf('Fatih'))
// arkadaş.push(23)
// console.log(arkadaş)
// console.log(arkadaş.includes('Engin'))
// console.log(arkadaş.includes('Fatih'))
// console.log(arkadaş.includes('23'))

// if (arkadaş.includes('Engin')) {
//   console.log('Engin burada')
// }
// ---------------Array Methods Bitiş------------------------------
// ---------------Object Başlangıç------------------------------

const muratDizisi = [
  'Murat',
  'Akdağ',
  2040 - 1986,
  'Öğretmen',
  ['Kerem', 'Tuğçe', 'Bora'],
]

const murat = {
  adı: 'Murat',
  soyadı: 'Akdağ',
  yaş: 2040 - 1986,
  iş: 'Öğretmen',
  arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
}

// -----------------Destructure Başlangıç------------------------------
//İç içe dizileri parçalama

// const testArray = [10, 20, 30, 40, [41, 42, 43, 44]]
// = solundaki [] =, sağındakinin içini parçala

// let [a, b, c, d, e] = testArray
// console.log(e)
// let [f, g, h, i] = e
// console.log(h)

// let [, , , , h] = testArray
// console.log(h)
// let [, , i] = h
// console.log(i)

// let [, , , , [, j]] = testArray
// console.log(j)

// console.log(testArray[4][2])
// console.log(testArray[5])
// -----------------Destructure Bitiş----------------------------------

// ---------------Object Bitiş----------------------------------
