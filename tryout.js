/* let dizike= ['hamit' , 'yavuzi' , 'faruki']
let yenidizi = []
for(let i = 0 ; i<dizike.length;i++){
let stringke= '';
    for(let a = 0; a<dizike[i].length;a++){
      if(dizike[i][a] !== 'i'){
          stringke += dizike[i][a];
      }
   }  
   yenidizi.push(stringke)
}
console.log(yenidizi) */



// Başlangıç dizisi
let originalArray = ["imagine", "inspiration", "hello", "world"];

// "i" harflerini çıkararak yeni bir dizi oluşturuyoruz
let modifiedArray = originalArray.map(function(str) {
  let newStr = "";
  
  // Her bir karakteri kontrol edip "i" harflerini atlıyoruz
  [...str].map(function(char) {
    if (char !== "i") {
      newStr += char;
    }
  });
  
  return newStr;
});

console.log(modifiedArray);


dizi.map((value,index) =>{
    let newstring = ''
    for(let num of value){
        
        if(num !== 'i'){
            newstring += num;
        }
      
    }
    yenike.push(newstring)
}) 

   /*  for(let num of dizi){
        let yenike= '';
    for(let nume of num){
     if(nume !== 'i'){
    yenike += nume;
     }
        }
        yenikee.push(yenike)
    } */















//dizike deki , her dizideki karakterinde, i harfi varmi diye kontrol edilsin ve eger var ise o dizideki elemandan o i cikartilsin
//1.soru splice sadece dizi deki elemanlarimi kontrol ediyor yoksa bir dizideki elemanin icindeki harflerede uygulama yapabiliyormu? cevap : sadece dizideki elemanlar uzerinde islem yapabilir
//2.soru split kullanilarak yapilabilirmi? Value split yapilsa sonra yeni bir objeye atansa o harf ve eger o harf i ise atanmasa falan?
































/* let newar = numbers.map(kare)
function kare(num){
    if(num % 2 == 0){
        return Math.sqrt(num)
    }
    else{
        return num;
    }
}

console.log(newar) */












/* Push x (dizinin sonuna yeni elemen ekler, eger yeni bir objeye atiyacaksanda onun uzunlugunu atar)
Pop x (Amacı: Dizinin sonundaki elemanı kaldırır (çıkartır) ve kaldırılan elemanı döner. pop metodu doğrudan diziyi değiştirir, yani dizinin mevcut halini etkiler , Geri Dönüş Değeri: Diziden kaldırılan (çıkartılan) elemanı döner.)
shift: Dizinin başından eleman kaldırır.
unshift: Dizinin başına eleman ekler.


Map
filter 
reduce 
foreach 
find 
some 
every 

split(""):
Kelimeyi bir karakter dizisine çevirir. Örneğin, "elma" → ["e", "l", "m", "a"].
reverse():
Diziyi ters çevirir. Örneğin, ["e", "l", "m", "a"] → ["a", "m", "l", "e"].
join(""):
Diziyi tekrar birleştirir. Örneğin, ["a", "m", "l", "e"] → "amle".
map:
Bu işlemi her bir eleman için uygular.

Math.round, Math.random, Math.max, Math.min


then, catch, finally

async ve await kullanımı

fetch, then, catch */