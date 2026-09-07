class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for (let n of nums) {
            if (!map.get(n)) map.set(n, 0)
            map.set(n, map.get(n) + 1)
        }
        return [...map.entries()].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, k)
    }
}
