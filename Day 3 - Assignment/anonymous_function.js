// a. Print odd numbers in an array

let oddNumbers = function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};
oddNumbers();


// b. Convert all the strings to title caps in a string array

let titleCaps = function () {
    let array = ["apple", "banana", "orange"];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
};
titleCaps();

// c. Sum of all numbers in an array

let sumOfNumbers = function () {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Sum:", sum);
};

sumOfNumbers();


// d. Return all the prime numbers in an array

let funPrimeNumbers = function () {
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
funPrimeNumbers();


// e. Return all the palindromes in an array

const returnAllPalindromes = function (words) {
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
};
let inputWords = ["level", "hello", "radar", "world"];
let palindromes = returnAllPalindromes(inputWords);
console.log("Palindromes:", palindromes);


// f. Return median of two sorted arrays of the same size

let findMedian = function (arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let length = mergedArray.length;

    if (length % 2 === 0) {

        let mid1 = mergedArray[length / 2 - 1];
        let mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {

        return mergedArray[Math.floor(length / 2)];
    }
};
let median = findMedian([1, 2, 3], [4, 5, 6]);
console.log("Median:", median);


// g. Remove duplicates from an array

let removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

let nums = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
let lengthWithoutDuplicates = removeDuplicates(nums);

console.log("Modified Array:", nums.slice(0, lengthWithoutDuplicates));
console.log("Length without Duplicates:", lengthWithoutDuplicates);

// h. Rotate an array by k times

const rotateArrayByK_anonymous = function (arr, k) {
    const n = arr.length;
    k = k % n; // Normalize k to handle cases where k > n

    // Function to reverse elements in a subarray
    const reverse = function (start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    reverse(0, n - 1); // Reverse the entire array
    reverse(0, k - 1); // Reverse the first part of the array
    reverse(k, n - 1); // Reverse the second part of the array

    return arr;
};

const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log("Rotated array:", rotateArrayByK_anonymous(arr, k));
