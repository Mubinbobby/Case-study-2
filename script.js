// 1.Prime Number

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) { 
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    const firstElement = arr[0];
    
    if (typeof firstElement !== 'number') {
        return "First element is not a number";
    }

    if (isPrime(firstElement)) {
        return `The first element ${firstElement} is a prime number.`;
    } else {
        return `The first element ${firstElement} is not a prime number.`;
    }
}


let myArray = [7, 3, 5, 8];
console.log(checkFirstElementPrime(myArray)); 

// 2.Most Frequent 

function findMostFrequent(arr) {
    if (arr.length === 0) return null;

    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentItem;

    for (let item of arr) {
        
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }

        
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}


let myArray1 = [3, 7, 3, 2, 3, 7, 7, 7, 8];
console.log(findMostFrequent(myArray)); 




// 3.iteration 


for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}



// 4.sum of squares



function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]; 
    }

    return sum;
}


let myArray2 = [2, 3, 4];
console.log(sumOfSquares(myArray)); 


