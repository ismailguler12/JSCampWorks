//Ödev1 asal sayı kontrolü

function checkPrime (number) {
    for (let i = 2 ; i <= Math.sqrt(number); i++){
        if(number%i === 0){
            return false;
        }
    }
    return true
}
function findPrime(...numbers){
    primeList = []
    for(let i = 0; i < numbers.length; i++){
        if(checkPrime(numbers[i]) === true ) {
            primeList.push(numbers[i])}
    }
    console.log("asal sayılar:")
    primeList.map(prime=> console.log("bu sayı asaldır: ", prime))
    console.log("asal olmayan sayılar:" , ... numbers.filter(n=> !primeList.includes(n) ))
}
findPrime(10, 20 ,40,50, 5, 7, 12, 20, 17, 19, 35)
console.log("\n\n\n")


//Ödev2 arkadaş sayı kontrolü

function findDivisors(number){
    let divisors = []
    for (let i = 1; i <= number/2; i++){
        if(number%i===0) divisors.push(i)
    }
    return divisors
}
let checkFriendNumber=function(number1, number2){
    let divisors1 =[], divisors2= []
    divisors1 = findDivisors(number1)
    divisors2 = findDivisors(number2)
    let top1 = 0, top2 =0;
    divisors1.map(d1 =>{top1+=d1})
    divisors2.map(d2 =>{top2+=d2})
    if(top1 ===  number2 & top2 === number1){
        console.log(number1," ve ",number2," arkadaş sayılardır.")
    }
    else{
        console.log(number1," ve ",number2," arkadaş sayı değildir")
    }
}
checkFriendNumber(1184, 1210)
console.log("\n\n\n")


//ödev3 mükemmel sayı listesi

function findPerfectNumber(maxNumber){
    let divisors = []
    for (let i =1; i <= maxNumber; i++){
        let topDivisorsValue = findDivisors(i).reduce((top, value) => top+value ,0 )
        if(topDivisorsValue === i) console.log(i, " sayısı mükemmel sayıdır")
    }
}
findPerfectNumber(1000)
console.log("\n\n\n")


//ödev4 asal sayı listesi

function listPrimeNumber(maxNumber){
    for(let i = 2; i <= maxNumber; i++){
        if(checkPrime(i) === true) console.log(i, "sayısı asal bir sayıdır")
    }
}
listPrimeNumber(1000)