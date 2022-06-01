const removeFromArray = function(array, ...nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = array.indexOf(nums[i]);
        if (index != -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
