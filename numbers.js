const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3]
let largestNumber = arrayOfNums[0]

function findLargestNumber() {
    for (let i=0; i < arrayOfNums.length; i++) {
        console.log (`Our largest number found so far is: ${largestNumber}`)
        if(arrayOfNums[i] > largestNumber) {
            console.log(`We have found a larger number. ${arrayOfNums[i]} is larger than ${largestNumber}`)
       largestNumber = arrayOfNums[i];
        } 
    }
return largestNumber;
}

function findEvenNumbers() {
    let evenArray = [];
    for (let i=0; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] % 2 === 1) {
            evenArray.push(arrayOfNums[i]);
        }
    }
    return evenArray;
}
console.log(findEvenNumbers())

