function modifyArray(nums) {
    
     var newFN =(n)=>{
        if(n%2==0)
            return n*2;
        else
            return n*3;
    }
    var newArray = nums.map(newFN);
    return newArray;
    
}