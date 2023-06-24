var sortedSquares = function(nums) {
    let a = []
    for(let i = 0 ; i < nums.length ; i++){
        a.push(nums[i]**2)
    }
    return a.sort((a,b)=> a-b)
}