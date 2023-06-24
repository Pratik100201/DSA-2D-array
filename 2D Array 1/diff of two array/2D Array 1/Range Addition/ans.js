 var maxCount = function(m, n, ops) {
     if(ops.length == 0){ return m*n}
     let min = [m,n]
     for(let [a,b] of ops){
         min = [Math.min(a,min[0]), Math.min(b,min[1])]
     }
     return min[0]*min[1]
};   
