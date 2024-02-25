// a. Print odd numbers in an array

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})();


// b. Convert all the strings to title caps in a string array

(function () {
    let array = ["apple", "banana", "orange"];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
})();


// c. Sum of all numbers in an array

(function () {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Sum:", sum);
})();


// d. Return all the prime numbers in an array

(function () {
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
})();


// e. Return all the palindromes in an array

const palindromes1 = (function (words) {
    const palindromeArr = [];
    for (let i = 0; i < words.length; i++) {
        let w = words[i];
        let n = w.slice(0, Math.floor(w.length / 2));
        let j = w.slice(Math.ceil(w.length / 2), w.length);
        if (n == j.split('').reverse().join('')) {
            palindromeArr.push(w);
        }
    }
    return palindromeArr;
})(["level", "hello", "radar", "world"]);

console.log("Palindromes:", palindromes1);


// f. Return median of two sorted arrays of the same size

const findMedian1 = (function (arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let length = mergedArray.length;

    if (length % 2 === 0) {
        let mid1 = mergedArray[length / 2 - 1];
        let mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
})([1, 2, 3], [4, 5, 6]);

console.log("Median:", findMedian1);


// g. Remove duplicates from an array

let numsArray;

let lengthWithoutDuplicates1 = (function (nums) {
    numsArray = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
    if (numsArray.length === 0) {
        return 0;
    }
    let k = 1;
    for (let i = 1; i < numsArray.length; i++) {
        if (numsArray[i] !== numsArray[k - 1]) {
            numsArray[k] = numsArray[i];
            k++;
        }
    }
    return k;
})();

console.log("Modified Array:", numsArray.slice(0, lengthWithoutDuplicates1));
console.log("Length without Duplicates:", lengthWithoutDuplicates1);

// h. Rotate an array by k times

const rotateArrayByK_IIFE = (function () {
    return function (arr1, k1) {
        const n = arr1.length;
        k1 = k1 % n; // Normalize k to handle cases where k > n

        // Function to reverse elements in a subarray
        const reverse = function (start, end) {
            while (start < end) {
                const temp = arr1[start];
                arr1[start] = arr1[end];
                arr1[end] = temp;
                start++;
                end--;
            }
        };

        reverse(0, n - 1); // Reverse the entire array
        reverse(0, k1 - 1); // Reverse the first part of the array
        reverse(k1, n - 1); // Reverse the second part of the array

        return arr1;
    };
})();

const arr1 = [1, 2, 3, 4, 5];
const k1 = 3;
console.log("Rotated array:", rotateArrayByK_IIFE(arr, k1));
