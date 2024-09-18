function calculateDifference(num1, num2) {
    return num1 - num2;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function findMin(arr) {
    return Math.min(...arr);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

console.log('Difference: ', calculateDifference(10, 5));                  
console.log('Is Odd: ', isOdd(7));                                        
console.log('Minimum Value: ', findMin([10, 3, 8, 5, 7]));                
console.log('Even Numbers: ', filterEvenNumbers([1, 2, 3, 4, 5]));       
console.log('Sorted Array (Descending): ', sortArrayDescending([4, 10, 3, 7])); 
console.log('Lowercase First Letter: ', lowercaseFirstLetter('HELLO'));    
console.log('Vowel Count: ', countVowels('Abdul Aziz Arafat'));          
console.log('Average: ', findAverage([5, 10, 15]));                      
