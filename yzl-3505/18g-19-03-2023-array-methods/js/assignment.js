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

// const users = [
//   { id: 21, hasSubmitted: true },
//   { id: 62, hasSubmitted: false },
//   { id: 4, hasSubmitted: true },
// ];

// const hasSubmittedusers = users.every(function (user) {
//   return user.hasSubmitted;
// });

// console.log(hasSubmittedusers);
// //   array verildiğinde, her kullanıcı bir istek formu gönderdiyse 'true'
// // döndürün. Sonucu 'hasSubmitted' değişkenine atayın.

// const requests = [
//   { url: "/photos", status: "complete" },
//   { url: "/albums", status: "pending" },
//   { url: "/users", status: "failed" },
// ];
// const inProgressNetwork = requests.some(function (request) {
//   return request.status === "pending";
// });
// console.log(inProgressNetwork);
//   isteklerini temsil eden bir array verildiğinde, herhangi bir ağ isteğinin
// 'pending' status'üne sahip olması durumunda 'inProgress' değişkenine
// 'true' boolean değerini atayın.

// const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
// const totalDistance = trips.reduce(function (total, trip) {
//   return total + trip.distance;
// }, 0);

// console.log(totalDistance);
// Kat edilen tüm mesafelerin toplamını bulmak için 'reduce' yardımcısını kullanın.
//  Sonucu 'totalDistance' değişkenine atayın

// const passengers = [
//   { type: "oturan" },
//   { type: "ayakta" },
//   { type: "oturan" },
//   { type: "oturan" },
//   { type: "ayakta" },
// ];
// const deskTypes = passengers.reduce(
//   function (result, passenger) {
//     if (passenger.type === "oturan") {
//       result.oturan++;
//     } else {
//       result.ayakta++;
//     }
//     return result;
//   },
//   {
//     oturan: 0,
//     ayakta: 0,
//   }
// );

// console.log(deskTypes);
// Oturan ve ayakta duran yolcuların sayısını gösteren bir nesne oluşturmak için
// 'reduce' yardımcısını kullanın. Döndürülen nesne '{ oturan: 3, ayakta: 2 }'
// biçiminde olmalıdır.Başlangıç değeri verilmiştir.
