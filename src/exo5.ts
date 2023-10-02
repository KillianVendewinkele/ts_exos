function filterEvenNumbers(numbers: number[]){
    let evenNumbers: number[] = [];
    numbers.forEach(element => {
        if(element%2 === 0){
            console.log(element);
            evenNumbers.push(element);
        }
    });
    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));