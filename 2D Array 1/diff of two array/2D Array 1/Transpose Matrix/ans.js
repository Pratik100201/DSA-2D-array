var transpose = function(matrix) {
   let res = []
   for(let i = 0 ; i< matrix[0].length ;i++){
       let dp = []
       for(let j = 0 ; j< matrix.length ; j++){
          dp.push( matrix[j][i])
       }
       res.push(dp)
   }
   return res
};