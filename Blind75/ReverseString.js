/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign =1;
    if(x<0){
        sign=-1
        x = -x
    }
    let reverse = 0;
    while(x!==0){
        let curr = x%10;
        reverse = reverse*10+curr
        x = Math.floor(x/10)
    }
    if(reverse<-Math.pow(2,31)||reverse>Math.pow(2,31)-1){
        return 0
    }
    return reverse*sign
};
