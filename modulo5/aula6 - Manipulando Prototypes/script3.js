function sortArray(array) {
    const num = array
        .filter(x => x % 2)
        .sort((a, b) => a - b)
    // Return a sorted array.
    return array
        .map(x =>{
            if (x % 2) {
                return num.shift()
            } return x
        })
};

console.log(sortArray(1,2,3,4,5));