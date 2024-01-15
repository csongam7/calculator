function add(numbers){
    return (numbers.reduce((accumulator, current) => {return accumulator + current;}, 0)); 
}

function subtract(numbers){
    return (numbers.reduce((accumulator, current) => {return accumulator - current;}, 0));
}