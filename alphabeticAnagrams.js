function anagramPosition (string){
    const sorted = string.split('').sort();
    console.log('sorted is', sorted);
    let count = 1; 
    string.split('').forEach(char => {
        const rank = sorted.indexOf(char);
        console.log('rank is', rank);
        const wasCounted = {};
        console.log(sorted.slice(0,rank));
        sorted.slice(0, rank).forEach((el, i)=>{
            console.log('element is', el);
            if(!wasCounted[el]){
                console.log(count);
                console.log(withoutIndex(i, sorted));
                console.log(countAnagrams(withoutIndex(i, sorted)));
                count += countAnagrams(withoutIndex(i, sorted));
            }
            wasCounted[el] = true;
        });
        sorted.splice(rank,1);
    })
    return count;
}


function countAnagrams (array){
    const nFactorial = factorial(array.length);
    const charOccurences = countChars(array);
    const factorialsProduct = Object.keys(charOccurences).map(char=> factorial(charOccurences[char])).reduce((a,b)=> a*b);
    return nFactorial / factorialsProduct; 
}
const factorial = n => n===1 ? 1 : n * factorial(n-1);
const countChars = array => array.reduce((counter,char)=>{
    counter[char] = counter[char] + 1 || 1; return counter
},{});
const withoutIndex = (i, array) => array.slice(0,i).concat(array.slice(i+1));

let testArray = ['a','a','b','d','g'];

let charOccurrences = countChars(testArray);

let factorialsProduct = Object.keys(charOccurrences).map(char => factorial(charOccurrences[char])).reduce((a,b)=> a*b);

console.log(withoutIndex(3, testArray));

let test1 = "BAEBEE";
let test2 = "ABBS";
let test3 = "BABS";
let test4 = "ARCTIC";
let test5 = "STARK"; 

console.log(anagramPosition(test5));

