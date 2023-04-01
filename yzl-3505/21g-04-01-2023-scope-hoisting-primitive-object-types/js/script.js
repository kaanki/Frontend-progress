//use scri
"use strict";

function yasHesap(dogumYili) {
  const yas = 2040 - dogumYili;
  function yasYazdir() {
    let output = `${isim} ${dogumYili} dogumlu  ${yas} yasinda`;
    console.log(output);
    if (dogumYili >= 1981 && dogumYili <= 1996) {
      var millenial = true;
      // Dış kapsamdaki değişken ile aynı isme sahip değişken oluşturma
      const isim = "Namık";
      // Dış kapsamdaki değişkene yeniden atama
      output = "yeni çıktı";
      const str = `${isim} Y kusaginda dogmussun`;
      console.log(str);
      function ekle(a, b) {
        return a + b;
      }
    }
    console.log(output);
  }
  yasYazdir();
  return yas;
}

const isim = "Murat";

yasHesap(1986);
