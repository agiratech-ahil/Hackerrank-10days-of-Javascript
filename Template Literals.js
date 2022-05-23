function sides(literals, ...expressions) {
    
    const [a,b] = expressions;
    
    const result = Math.sqrt((b*b) - (16*a))
    const s1 = (b+result)/4
    const s2 = (b-result)/4 
    var resArr = [s1,s2]
    
    return resArr.sort(function(a,b){
        return b-a;
    });
    
}
