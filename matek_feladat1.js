// Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, tetszőlegesen méretű
//  egész számot összead, és visszatér az összeadás végeredményével! A paraméterként kapott értékek 
//  egyszerű number típusúak legyenek! Amennyiben bármelyik paraméter értéke, vagy a részeredmény 
//  meghaladja a biztonságos tartomány, automatikusan konvertáljad BigIntbe, és így számoljunk tovább, 
// és természetesen a visszatérési érték is BigInt legyen!

function feladatMatek1 (...num){
const sum = num.reduce((previousValue,currentValue)=>{
       
    if(Number.isSafeInteger(previousValue) && Number.isSafeInteger(currentValue) ){
       return previousValue+currentValue;
        }else{
        const bigintpre = BigInt(previousValue);
        const bigintcur = BigInt(currentValue);
        return bigintpre+bigintcur;
    
 } });
console.log(typeof sum, sum);
return sum;
}
feladatMatek1(1,2,3,4,5,6,7,8,99999999999);
