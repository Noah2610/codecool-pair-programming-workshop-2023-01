const array = [];
for (let j = 1; j<= 100; j++) {
    array.push(j)
}
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        console.log("FizzBuzz");
    } else if (array[i] % 3 === 0) {
        console.log("Fizz");
    } else if (array[i] % 5 === 0) {
        console.log("Buzz");
    } else if (array[i] % 5 !== 0 && array[i] % 3 !== 0) {
        console.log(array[i]);
    }
}