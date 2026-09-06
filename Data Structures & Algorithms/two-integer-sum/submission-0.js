class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            const comp = target - nums[i]
            if (map.get(nums[i]) != undefined) return [map.get(nums[i]), i]
            map.set(comp, i)
            
        }
    }
}
