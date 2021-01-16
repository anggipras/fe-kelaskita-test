const fizzBuzzData = numbers => {
    for(let ind = 1; ind <= numbers; ind++) {
        if(ind % 3 === 0 && ind % 5 === 0) console.log(ind, "FizzBuzz"); 
        else if(ind % 3 === 0) console.log(ind, "Fizz");
        else if(ind % 5 === 0) console.log(ind, "Buzz");
        else console.log(ind);
    }
}

fizzBuzzData(100)