module.exports = function getZerosCount(number) {
    let zeros = 0;
    const recFn = x => {
        const int = Math.floor(x / 5);
        zeros += int;
        if(int >= 5){
            return recFn(int)
        } else{
            return zeros
        }
    };
    return recFn(number)
};
