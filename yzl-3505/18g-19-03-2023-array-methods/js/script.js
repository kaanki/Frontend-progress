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

// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'Öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
// ]

// const murat = {
//   adı: 'Murat',
//   soyadı: 'Akdağ',
//   yaş: 2040 - 1986,
//   iş: 'Öğretmen',
//   arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
// }

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

// const murat = {
//   adı: 'Murat',
//   soyadı: 'Akdağ',
//   yaş: 2040 - 1986,
//   iş: 'Öğretmen',
//   arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
// }

// console.log(murat)
// console.log(murat.soyadı)
// console.log(murat['soyadı'])

// const isim = 'adı'
// console.log(murat['soy' + isim])
// // console.log(murat.'soy' + isim)

// const muratHakkında = prompt(
//   'Murat hakkında ne bilmek istiyorsunuz? Ad,soyad,yaş,iş ve arkadaşlar arasında seçim yapın'
// )

// console.log(muratHakkında)
// console.log(murat[muratHakkında])

// if (murat[muratHakkında]) {
//   console.log(murat[muratHakkında])
// } else {
//   console.log(
//     'Yanlış seçim yaptınız.Ad,soyad,yaş,iş ve arkadaşlar arasında seçim yapın'
//   )
// }

// murat.konum = 'Kadıköy'
// murat['twitter'] = '@murat'
// console.log(murat)

//Mini Challenge

// const murat = {
//   adı: 'Murat',
//   soyadı: 'Akdağ',
//   yaş: 2040 - 1986,
//   iş: 'Öğretmen',
//   arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
// }

//Murat'ın üç arkadaşı var ve en iyi arkadaşının adı Kerem'dir
// console.log(
//   `${murat.adı}'ın ${murat.arkadaşlar.length} arkadaşı var ve en iyi arkadaşının adı ${murat.arkadaşlar[0]}'dir`
// )

// const obj = {
//   a: 1,
// }

// const a = 'a'
// const b = 'b'

// console.log(obj.a) // 1
// console.log(obj['a']) // 1
// console.log(obj[a]) // 1
// console.log(obj[b]) //undefined
// console.log(obj[abc]) //error

// ------Destructure Object Başlangıç----------

// const restaurant = {
//   isim: 'İtalyan Pizza',
//   konum: 'Kadıköy BilgeAdam',
//   kategoriler: ['İtalyan', 'Mantarlı', 'Peynirli', 'Organik'],

//   açılışSaati: {
//     perşembe: {
//       açık: 12,
//       kapalı: 22,
//     },
//     cuma: {
//       açık: 11,
//       kapalı: 23,
//     },
//     cumartesi: {
//       açık: 0, // 24 saat açık
//       kapalı: 24,
//     },
//   },
// }

// const {
//   isim: lokantaİsmi,
//   açılışSaati: saatler,
//   kategoriler: çeşitler,
// } = restaurant
// console.log(lokantaİsmi)
// console.log(saatler)
// const { cuma: friday } = saatler
// console.log(friday)
// const { açık, kapalı } = friday
// console.log(açık, kapalı)
// ------Destructure Object Bitiş----------

// -------------Object Methods Başlangıç----------------
// const murat = {
//   adı: 'Murat',
//   soyadı: 'Akdağ',
//   doğumYılı: 1986,
//   iş: 'Öğretmen',
//   arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
//   ehliyetiVarMı: false,
//   yaşHesap: function () {
//     this.yaş = 2040 - this.doğumYılı
//     return this.yaş
//   },
//   özet: function () {
//     return `${this.adı} ${this.yaş} yaşında ${this.iş}'dir ve ehliyeti ${
//       this.ehliyetiVarMı ? 'var' : 'yok'
//     }`
//   },
// }
//DRY----> Don't repeat yourself / Kendini Tekrar Etme
//this
// console.log(murat.yaşHesap())
// console.log(murat.yaş)

// console.log(murat['yaşHesap']())

//mini challenge
//"Murat 54 yaşında öğretmendir ve ehliyeti var"
// console.log(murat.özet())
// -------------Object Methods Bitiş---------------------

// ---------------Object Bitiş----------------------------------

// -------------Loop Başlangıç----------------------------
// console.log('ağırlık kaldırmak 1.tekrar')
// console.log('ağırlık kaldırmak 2.tekrar')
// console.log('ağırlık kaldırmak 3.tekrar')
// console.log('ağırlık kaldırmak 4.tekrar')
// console.log('ağırlık kaldırmak 5.tekrar')
// console.log('ağırlık kaldırmak 6.tekrar')
// console.log('ağırlık kaldırmak 7.tekrar')
// console.log('ağırlık kaldırmak 8.tekrar')
// console.log('ağırlık kaldırmak 9.tekrar')
// console.log('ağırlık kaldırmak 10.tekrar')

//Koşul true iken for döngüsü çalışmaya devam eder
// for (let tekrar = 5; tekrar <= 40; tekrar++) {
//   console.log(`ağırlık kaldırmak ${tekrar}.tekrar`)
// }

// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'Öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
//   true,
// ]

// const types = []
// console.log(muratDizisi[0])
// console.log(muratDizisi[1])
// console.log(muratDizisi[2])
// console.log(muratDizisi[3])
// console.log(muratDizisi[4])
// console.log(muratDizisi[5])----Yok

// console.log(types)

// const yıllar = [1974, 1986, 2000, 2004]
// const yaşlar = []
// for (let i = 0; i < yıllar.length; i++) {
//   yaşlar.push(2040 - yıllar[i])
// }
// console.log(yaşlar)

//continue & break
// console.log('---Sadece Stringler---')
// for (let i = 0; i < muratDizisi.length; i++) {
//   if (typeof muratDizisi[i] !== 'string') continue
//   console.log(muratDizisi[i], typeof muratDizisi[i])
// }
// console.log('---Number Break---')
// for (let i = 0; i < muratDizisi.length; i++) {
//   if (typeof muratDizisi[i] === 'number') break
//   console.log(muratDizisi[i], typeof muratDizisi[i])
// }

// const population = [10, 123, 360, 1230]
// const yüzdeler2 = []
// for (let i = 0; i < population.length; i++){
//   const yüzde = dünyanınYüzdesi1(population[i])
//   yüzdeler2.push(yüzde)
// }

// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'Öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
//   true,
// ]

// for (let i = muratDizisi.length - 1; i >= 0; i--) {
//   console.log(i, muratDizisi[i])
// }

// for (let egzersiz = 1; egzersiz < 4; egzersiz++) {
//   console.log(`${egzersiz} numaralı egzersiz`)
//   for (let tekrar = 1; tekrar <= 5; tekrar++) {
//     console.log(`${egzersiz}. egzersiz - Ağırlık kaldırma ${tekrar}`)
//   }
// }

// const komşularınListesi = [
//   ['Kanada', 'Meksika'],
//   ['İspanya'],
//   ['Norveç', 'İsveç', 'Rusya'],
// ]

// console.log("Komşu : Kanada");
// console.log("Komşu : Meksika");
// console.log("Komşu : İspanya");
// for (let i = 0; i < komşularınListesi.length; i++) {
//   for (let j = 0; j < komşularınListesi[i].length; j++) {
//     console.log(`Komşu: ${komşularınListesi[i][j]}`)
//   }
// }

// -----------------While Loop Başlangıç-----------

// for (let tekrar = 1; tekrar <= 10; tekrar++) {
//   console.log(`Ağırlık kaldırma ${tekrar}. tekrar`)
// }

// let tekrar = 1
// while (tekrar <= 10) {
//   console.log(`Ağırlık kaldırma ${tekrar}. tekrar`)
//   tekrar++
// }

// let zar = Math.trunc(Math.random() * 6) + 1

// while (zar !== 6) {
//   console.log(`${zar} rakamını attın`)
//   zar = Math.trunc(Math.random() * 6) + 1
//   if (zar === 6) {
//     console.log('Loop bitmek üzere')
//   }
// }

// const population = [10, 123, 360, 1230]
// let yüzdeler3 = []
// let i = 0
// while (i < population.length) {
//   const yüzde = dünyanınYüzdesi1(population[i])
//   yüzdeler3.push(yüzde)
//   i++
// }
// console.log(yüzdeler3);

// -----------------While Loop Bitiş-----------
// -----------------ForEach Başlangıç-----------
// let colors = ['red', 'blue', 'green']

// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i])
// // }

// colors.forEach(function (color) {
//   console.log(color)
// })

// const numbers = [1, 2, 3, 4, 5]

// let sum = 0

// function adder(number) {
//   sum += number
// }

// numbers.forEach(adder)

// console.log(sum)
// -----------------ForEach Bitiş-----------

// -----------------Map Başlangıç-----------
// const numbers = [1, 2, 3]

// const newNumbers = []

// for (let i = 0; i < numbers.length; i++) {
//   newNumbers.push(numbers[i] * 2)
// }

// // console.log(newNumbers)

// const double = numbers.map(function (number) {
//   return number * 2
// })
// console.log(double)

// const cars = [
//   { model: 'Audi', price: 'Pahalı' },
//   { model: 'Lada', price: 'Ucuz' },
// ]

// const prices = cars.map(function (car) {
//   return car.price
// })

// console.log(prices)
// -----------------Map Bitiş-----------
// -----------------Filter Başlangıç-----------
// const products = [
//     { name: 'apple', type: 'fruit' },
//     { name: 'banana', type: 'fruit' },
//     { name: 'orange', type: 'fruit' },
//     { name: 'carrot', type: 'vegetable' },
// ]

// // const filteredProducts = []

// // for (let i = 0; i < products.length; i++) {
// //   if (products[i].type === 'fruit') {
// //     filteredProducts.push(products[i])
// //   }
// // }
// // console.log(filteredProducts)

// const filterFruits = products.filter(function (product) {
//     return product.type === 'fruit';
// });

// console.log(filterFruits);

// const products = [
//     { name: 'apple', type: 'fruit', quantity: 0, price: 1 },
//     { name: 'banana', type: 'fruit', quantity: 5, price: 7 },
//     { name: 'orange', type: 'fruit', quantity: 10, price: 13 },
//     { name: 'carrot', type: 'vegetable', quantity: 9, price: 4 },
// ]

// const filteredFruits = products.filter(function (product) {
//     return product.type === 'fruit' && product.quantity > 0 && product.price < 10
// });

// console.log(filteredFruits)

// -----------------Filter Bitiş-----------------

// -------------Loop Bitiş--------------------------------
// -------------Find Başlangıç--------------------------------
// const users = [{ name: "Namık" }, { name: "Engin" }, { name: "Eda" }]
// let user ;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === "Engin") {
//         user = users[i]
//         break
//     }
// }

// const user = users.find(x => x.name ==="Engin")

// const user = users.find(function (user) {
//     return user.name === 'Engin'
// })

// console.log(user);

// function Car(model) {

//     this.model = model;

// }

// const cars = [new Car("Audi"), new Car("Volvo")]

// const myCar = cars.find(function (car) {
//     return car.model === "Volvo"
// })

// console.log(myCar);

// const listOfPosts = [{ id: 1, title: "Yeni İleti" }, { id: 2, title: "Eski İleti" }]

// const comment = { postId: 1, content: "Harika İleti" }

// function postForComment(posts, comment) {
//     return posts.find(function (post) {
//         return post.id === comment.postId
//     })
// }

// console.log(postForComment(listOfPosts, comment));
// -------------Find Bitiş--------------------------------
// -------------Every&Some Başlangıç--------------------------------

// const computers = [
//     { name: "Apple", ram: 64 },
//     { name: "Asus", ram: 16 },
//     { name: "Acer", ram: 32 },
// ]

// let allComputerCanRunProgram = true
// let someComputerCanRunProgram = false

// for (let i = 0; i < computers.length; i++) {
//     let computer = computers[i]
//     if (computer.ram < 32) {
//         allComputerCanRunProgram = false
//     }
//     else {
//         someComputerCanRunProgram = true
//     }
// }

// allComputerCanRunProgram = computers.every(function (computer) {
//     return computer.ram > 32
// })

// someComputerCanRunProgram = computers.some(function (computer) {
//     return computer.ram > 32
// })

// console.log(allComputerCanRunProgram);
// console.log(someComputerCanRunProgram);

// const names = ["namık", "eda", "engin"]

// const isEveryName = names.every(function (name) {
//     return name.length > 4
// })

// console.log(isEveryName);

// const someName = names.some(function (name) {
//     return name.length > 4
// })

// console.log(someName);

// -------------Every&Some Bitiş--------------------------------



















