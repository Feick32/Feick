let dizi = [6,3,2,2]
let yenidizi = []
dizi.map((value,index)=>{
    let newsayi = value *2;
    yenidizi.push(newsayi)
})
console.log(yenidizi)
yenidizi.push(19)
yenidizi.filter(sayi => sayi %2 == 0)
console.log(yenidizi)
let dizike= ['hamit' , 'yavuzi' , 'faruki']
let newdizike= dizike.filter((value,index) =>{
    for(let i = 0; i<value.length; i++){
        if(value[i] == 'i'){
            let yenekelime= value.
        } 
    }
})



































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