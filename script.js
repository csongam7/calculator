function add(numbers){
    return (numbers.reduce((accumulator, current) => {return accumulator + current;}, 0)); 
}