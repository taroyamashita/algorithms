function anagramPosition (string) {
    const sorted = string.split('').sort();
    let count = 1;
    string.split('').forEach(char => {
      const rank = sorted.indexOf(char);
      const wasCounted = {}; 
      sorted.slice(0, rank).forEach((el, i) => { 
        if (!wasCounted[el]) {
          count += countAnagrams(withoutIndex(i, sorted));
        }
        wasCounted[el] = true;
      });
      sorted.splice(rank, 1);
    });
    return count;
  }
  
  // Formula: n!/(n1!n2!...nk!)
  function countAnagrams (array) {
    const nFactorial = factorial(array.length);
    const charOccurences = countChars(array);
    const factorialsProduct = Object.keys(charOccurences).map(char => factorial(charOccurences[char])).reduce((a,b) => a * b);
    return nFactorial / factorialsProduct;
  }
  
  // Helper functions
  const countChars = array => array.reduce((counter, char) => {counter[char] = counter[char] + 1 || 1; return counter}, {});
  
  const factorial = n => n === 1 ? 1 : n * factorial(n - 1);
  
  const withoutIndex = (i, array) => array.slice(0, i).concat(array.slice(i + 1));