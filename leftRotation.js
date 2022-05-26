function rotateLeft(d, arr) {
    // Write your code here
    
    let res = arr.slice(d)
    let newArr = res.concat(arr.slice(0,d));
    return newArr;
}
