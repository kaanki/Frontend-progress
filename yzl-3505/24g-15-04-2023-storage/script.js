const storeButton = document.getElementById("store");
const callButton = document.getElementById("callback");

// const id = "a321";
// const userObj = {
//   name: "kaan",
//   age: 28,
//   friends: ["kişi", "kişi2", "kişi3"],
// };

// storeButton.addEventListener("click", function () {
//   sessionStorage.setItem("userId", id);
//   localStorage.setItem("user", JSON.stringify(userObj));
// });
// callButton.addEventListener("click", function () {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = sessionStorage.getItem("userId");
//   console.log(user);
//   if (userId) {
//     console.log("Kullanıcı id: " + userId);
//   } else {
//     console.log("Id bulunamadı");
//   }
// });

// ------------------------- Cookies--------------------------
// console.log(document.cookie);

storeButton.addEventListener("click", function () {
  const userId = "a321";
  const user = { name: "Murat", age: 37 };
  document.cookie = `userId = ${userId}`;
  document.cookie = `user = ${JSON.stringify(user)}`;
});
callButton.addEventListener("click", function () {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split("=")[1]);
});
