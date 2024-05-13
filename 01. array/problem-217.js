var containsDuplicateSet = function (nums) {
    const dataSet = new Set(nums)
    if (dataSet.size === nums.length) {
        return false
    } else {
        return true
    }
};

containsDuplicateSet([1,2,3,4])

var containsDuplicateObj = function (nums) {
    const tempObj = {}
    for (let i = 0; i < nums.length; i++) {
        if (tempObj[nums[i]]) {
            tempObj[nums[i]] += 1
            if (tempObj[nums[i]] > 1) return true
        } else {
            tempObj[nums[i]] = 1
        }
    }
    return false
};

containsDuplicateObj([1,2,3,1])