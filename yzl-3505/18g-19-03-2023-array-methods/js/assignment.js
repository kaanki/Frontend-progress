
// const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95]
// const filteredNumbers = numbers.filter(function (number) {
//     return number>50
// });
// console.log(filteredNumbers)
// // filter yardımcısını kullanarak numbers dizisini filtreleyin.
// // Yalnızca 50'den büyük sayıları içeren yeni bir dizi oluşturturun.
// //  Bu yeni diziyi 'filteredNumbers' adlı bir değişkene atayın.
// //   Fonksiyonda 'return' anahtar kelimesini kullanmayı unutmayın!

// const users = [{ id: 1, admin: true },
// { id: 2, admin: false },
// { id: 3, admin: false },
// { id: 4, admin: false },
// { id: 5, admin: true },]
// const filteredUsers = users.filter(function (user) {
//     return user.admin
// });
// console.log(filteredUsers)
// // users dizisini filtreleyin.
// // Yalnızca admin düzeyinde erişimi olan kullanıcıları döndürün.
// // Sonucu 'filteredUsers' değişkenine atayın.

// function reject(array, iteratorFunction) { 
//     return array.filter(function (element) {
//        return !iteratorFunction(element)
//     })
// }

// const numbers2 = [8, 10, 20, 30];
// const lessThanFifteen = reject(numbers2, function (number) 
// { return number > 15; }); 
// console.log(lessThanFifteen)
// // 'reject' adlı bir fonksiyon oluşturun.reject, 'filter' ın tersi 
// // şeklinde çalışmalıdır - Bir işlev 'true' değerini döndürürse,
// //     öğe yeni diziye * eklenmemelidir
// //         *.Örneğin: const numbers = [10, 20, 30];
// // const lessThanFifteen = reject(numbers, function (number) 
// // { return number > 15; }); 
// // console.log(lessThanFifteen)
// // [ 10 ] döndürmeli;

// const users = [{ id: 1, admin: false }, { id: 2, admin: false }, { id: 3, admin: true },]

// const admin = users.find(function (user) {
//     return user.admin
// });

// console.log(admin);

// users dizisinde admin olan kullanıcıyı bulun
// .Bu kullanıcıyı 'admin' değişkenine atayın.

// const accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }]
// const account = accounts.find(account => account.balance === 12);
// console.log(account);
// Bakiyesi 12 olan hesabı bulun ve 'account' değişkenine atayın.

