function anagramPostion (string){
    const sorted = string.split('').sort();
    let count = 1; 
    string.split('').forEach(char => {
        const rank = sorted.indexOf(char);
        const wasCounted = {};
        sorted.slice(0, rank).forEach((el, i)=>{
            if(!wasCounted[el]){
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

let testArray = ['a','a','b','d','g'];

let charOccurrences = countChars(testArray);

let factorialsProduct = Object.keys(charOccurrences).map(char => factorial(charOccurrences[char])).reduce((a,b)=> a*b);


console.log(factorialsProduct);


console.log(countChars(['a','a','b','d','g']));