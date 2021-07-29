//no1
// const evenCharacter = (string)=>{

//     let result="";
//     if (typeof string !== 'string') {
//         return 'bukan string';
//     }
//     for (let i = 1; i < string.length; i++) {
//         // console.log(str[i]);
//         i%2 == 1 ? result += string[i] : "";

//         // if (i%2 == 1) {
//         //     result += string[i];
//         // }else{

//         // }
//     }

//     return result;

// }

// console.log(evenCharacter("pratama"))

//no2
// const cWord = (kalimat) => {
//         if (typeof kalimat !== 'string') {
//             return "makhluk yang anda masukkan tidak string"
//         }

//         var angka = 0
//         for(var k = kalimat.length-1; k > 0; k--){
//             if (kalimat[k] != " ") {
//                 break
//             }else{
//                 angka++
//             }
//             console.log(angka)
//         }
//         var res=[]
//         for(var l =0; l < kalimat.length-angka; l++){
//             if (kalimat[l] != " " && kalimat[l+1] == " ") {
//                 res += kalimat[l]
//             }
//             console.log(kalimat[l])
//         }

//         if (kalimat[kalimat.length-1] == " ") {
//             return res.length
            
//         }else if (kalimat[kalimat.length-1] != " ") {
//             return res.length + 1
//         }

// }
// console.log(cWord("anda sudah gila"))


//no3

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  let constanta = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }else{
      constanta +=1;
    }
  
  }
  return `vokal ; ${vcount}, konsonan: ${constanta}`;
}
console.log(vowel_count("pratama"));


//no4
// const reverseWord = (str) => {
//     let r = "";
//     for(let i = str.length-1; i >= 0; i--){
//       r += str[i];
//     }
//     return r;

// }
// // function reverse1(str){
// //     let r = "";
// //     for(let i = str.length-1; i >= 0; i--){
// //       r += str[i];
// //     }
// //     return r;
// //   }
  
// console.log(reverseWord("world!"))


//no5
// const palindrome = (string) =>{

//     var result = ""
//     for(var i = string.length-1; i>=0; i--){
//         result += string[i]
//     }
//     if (string == result) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(palindrome("bola"))

//no6
const exCoin = (angka) =>{
  let coinTetap = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
  let pecah="";

  for(let i =0; i<coinTetap.length; i++){
    let hasilPecahan = coinTetap[i];
    console.log(hasilPecahan)
    while(angka >= hasilPecahan){
      pecah += hasilPecahan;
      // console.log(hasilPecahan)
      angka -= hasilPecahan
    }
  }
  return pecah
}
console.log(exCoin(1752));



//7

// const asteriskLoop = (angka) =>{
//     let hasil = "";
//     for(let i =0; i<=angka; i++){
//         for(let j =0; j<=i;j++){
//             hasil +="*";
//         }
//         hasil +="\n";

//     }
//     return hasil
// }
// console.log(asteriskLoop(5))

// //no8
// const piramid = (num) => {
//     // let n = 5; // you can take input from prompt or change the value
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i; j++) {
//         result += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         result += "*";
//     }
//     result += "\n";
//     }
//     return result
// }
// console.log(piramid(5));

//9

function sort(arr) {
    arr = [...arr];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr = ''+arr
}
console.log(sort("dcna"));