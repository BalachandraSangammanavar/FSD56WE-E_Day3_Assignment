// a. Print odd numbers in an array

let oddNumbers1 = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};
oddNumbers1();


// b. Convert all the strings to title caps in a string array

let titleCaps1 = () => {
    let array = ["apple", "banana", "orange"];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
};

titleCaps1();


// c. Sum of all numbers in an array

let sumOfNumbers1 = () => {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Sum:", sum);
};

sumOfNumbers1();


// d. Return all the prime numbers in an array

let funPrimeNumbers1 = () => {
    let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 19];
    let primeNumbers = [];
    let i = 0;

    while (i < Arr.length) {
        let num = Arr[i];
        let isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(num);
        }

        i++;
    }

    console.log(primeNumbers);
}
funPrimeNumbers1();


//e. Return all the palindromes in an array

const returnAllPalindromes2 = (words) =>
    words.filter((word) => {
        const mid = Math.floor(word.length / 2);
        const firstHalf = word.slice(0, mid);
        const secondHalf = word.slice(-mid).split('').reverse().join('');
        return firstHalf === secondHalf;
    });

let inputWords2 = ["level", "hello", "radar", "world"];
let palindromes2 = returnAllPalindromes2(inputWords);
console.log("Palindromes:", palindromes2);
