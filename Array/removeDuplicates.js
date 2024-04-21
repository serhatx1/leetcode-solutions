/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if(nums.length<3 ||(nums.length==3&&nums[1]!==nums[2]))
   return nums.length
   
    for(let i =1;i<nums.length-1;i++){
        if(nums[i-1]==nums[i+1]){
            nums.splice(i,1)
            i--
        }

    }
    return nums.length;
};
