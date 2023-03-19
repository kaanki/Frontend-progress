// ----------------Js Temeller Başlangış---------------
// let js = 'müthiş'
// if (js === 'müthiş') alert('Js eğlenceli')
// console.log(40 + 5 + 4 - 3)

// console.log('Murat')
// console.log(26)

// let isim = 'Samet'

// console.log(isim)
// console.log(isim)
// console.log(isim)
// console.log(isim)

// Değişken Adları Kuralları

// let ilkİsim = 'Murat' //camelCase
// let 3yıl = "Murat"
// let murat&engin = 'ben'
// let new = 27
// let $fun_3ion = 23

// // let Person = 'Murat'
// let PI = 3.141519

// let ilkİşim = 'Mühendis'
// let mevcutİşim = 'Öğretmen'

// let iş1 = 'Mühendis'
// let iş2 = 'Öğretmen'
// ----------------Js Bitiş--------------------

// -----------------------Values/Variables Challenge 1 Başlangıç-----------
// -----------------------Values/Variables Challenge 1 Bitiş-----------

// ilkel primitive ---- object nesne

// let ben = {
//   name: 'Murat',
// }

// let ilkİsim = 'Murat' //string
// let yaş = 36 //number
// // ilkİsim = 35 //number
// let çocuk //undefined
// console.log(çocuk)
// console.log(typeof çocuk)
// console.log(ilkİsim)
// console.log(true)
// let tamYaş = true //Boolean
// console.log(tamYaş)
// console.log(typeof ilkİsim)
// console.log(typeof tamYaş)
// console.log(typeof 36)
// console.log(typeof 'Murat')

// tamYaş = 'evet'
// console.log(typeof tamYaş)

// çocuk = 'Murat'
// console.log(typeof çocuk)
// console.log(typeof null)

// -----------------------Data Types Challenge 2 Başlangıç-----------
// -----------------------Data Types Challenge 2 Bitiş-----------

// -----------------let,const,var Başlangıç-----------------
// let yaş = 36
// yaş = 37
// let yıl
// yıl = 2023

// const doğumYılı = 1986
// doğumYılı = 1987
// const iş

// var iş = 'Mühendis'
// iş = 'Öğretmen'

// soyad = 'Akdağ'
// console.log(soyad)
// -----------------let,const,var Bitiş---------------------

// -----------------------let,const,var Challenge 3 Başlangıç-----------
// -----------------------let,const,var Challenge 3 Bitiş--------------

// ---------------Operatörler  Başlangıç-----------------------
// Matematik İşlemleri
// const şimdi = 2040
// const yaşMurat = şimdi - 1986
// // console.log(yaşMurat)
// const yaşEngin = şimdi - 2025
// console.log(yaşEngin, yaşMurat)
// console.log(yaşEngin * 2, yaşMurat / 2, 2 ** 3)

// const ad = 'Murat'
// const soyad = 'Akdağ'
// console.log(ad + ' ' + soyad)

// Atama İşlemleri
// let num = 10 + 5 //15
// num += 10 // num = num + 10----> 25
// num *= 4 // num = num * 4----->100
// num++ // num = num + 1---->101
// num-- // num = num - 1---->100
// console.log(num)

// // Karşılaştırma İşlemleri
// console.log(yaşEngin > yaşMurat) //<,>,>=,<=
// console.log(yaşEngin >= 18)

// const reşitMi = yaşEngin >= 18
// console.log(şimdi - 1986 > şimdi - 2025)
// console.log(35 - 10 - 5)

// let x, y

// x = y = 35 - 10 - 5 //20 y = 20----> x = 20, x = y = 20

// console.log(x, y) //20,20

// const şimdi = 2040
// const yaşMurat = şimdi - 1986
// // console.log(yaşMurat)
// const yaşEngin = şimdi - 2025

// const ortalamaYaş = (yaşMurat + yaşEngin) / 2

// ---------------Operatörler  Bitiş-----------------------

// ----------------------Template Literals Başlangıç-------------------

// const ad = 'Murat'
// const iş = 'Öğretmen'
// const doğumYılı = 1986
// const yıl = 2040
// Murat 54 yaşında öğretmen

// const murat = "I'm " + ad + ', a ' + (yıl - doğumYılı) + ' years old ' + iş
// console.log(murat)

// let str = 'Hello'
// str += 'World' // str = str + "World"
// console.log(str)

// const yeniMurat = `${ad} ${yıl - doğumYılı} yaşında ${iş} `
// console.log(yeniMurat)
// console.log(`Sadece bir dize`)
// ----------------------Template Literals Bitiş------------------------

// -----------------------Template Literals Challenge 4 Başlangıç-----------
// -----------------------Template Literals Challenge 4 Bitiş--------------

// ------------------------if/else Başlangıç-------------------------

// const yaş = 15

// const yaşıUygunMu = yaş >= 18
// console.log(yaşıUygunMu)

// if (yaş >= 18) {
//   //false
//   console.log('Murat ehliyet alabilir')
// } else {
//   const yılKaldı = 18 - yaş //3
//   console.log(`Murat çok genç. ${yılKaldı} yıl kadar beklemesi gerekiyor`)
// }

// const doğumYılı = 2000
// let yüzyıl
// console.log(yüzyıl)
// if (doğumYılı < 2000) {
//   yüzyıl = 20
// }

// console.log(yüzyıl)
// ------------------------if/else Bitiş----------------------------

// ---------Type Conversion & Coercion Başlangıç (Tür Dönüştürme & Zorlama)------------------

// Type Conversion/Tür Dönüşümü
// const girişYılı = '1986'
// console.log(Number(girişYılı), girişYılı)
// console.log(Number(girişYılı) + 18)
// console.log(Number('Murat'))
// console.log(typeof NaN)
// console.log(String(23), 23)
// console.log(girişYılı + 18)

// Type Coercion/Tür Zorlama
// console.log('Ben ' + 36 + ' yaşındayım')
// console.log('Ben ' + '36' + ' yaşındayım')

// console.log('36' - '10' - 3)

// console.log('36' + '10' + 3)

// console.log('36' * '2')

let n = '1' + 1 // "11"

n = n - 1 // "11" - 1-----> 10
// console.log(n)

// ---------Type Conversion & Coercion Bitiş----------------------

// ------------------------Truthy & Falsy Başlangıç-------------------
// 5 falsy değer: 0,undefined,null,"",NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Murat'))
// console.log(Boolean(''))
// console.log(Boolean({}))
// console.log(typeof Boolean(0))

// const para = 100
// if (para) {
//   //'Murat' ----> true
//   console.log('Paran yok')
// } else {
//   console.log('Çalışmalısın')
// }

// 5 falsy değer: 0,undefined,null,"",NaN
// let yükseklik = 0
// if (yükseklik) {
//   console.log('Yükseklik tanımlanmş')
// } else {
//   console.log('Yükseklik yok')
// }

// ------------------------Truthy & Falsy Bitiş------------------------

// -----------------Equality Operators: == vs === Başlangıç------------------
// const yaş = '18'

// if (yaş === 18) console.log('Yeni yetişkin oldum(katı)')
// if (yaş == 18) console.log('Yeni yetişkin oldum(gevşek)')

const favoriSayım = prompt('En sevdiğin rakam?')
// console.log(favoriSayım)
// console.log(typeof favoriSayım)

// if (favoriSayım == 23) {
//   //"23" == 23 ------> true
//   console.log('23 sayısını aldım')
// }
// if (favoriSayım === 23) {
//   //"7" === 23
//   //"23" === 23 ------> false
//   console.log('23 sayısını aldım')
// } else if (favoriSayım === 7) {
//   //"7" === 7
//   console.log('7 şanslı sayım')
// } else if (favoriSayım === 9) {
//   console.log('9 fena değil')
// } else {
//   console.log('Sayı 23,9 ve  7 değil')
// }

if (favoriSayım != 23) console.log('Neden 23 değil')

// -----------------Equality Operators: == vs === Bitiş----------------------
