class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for (let s of strs) {
            const sortedStr = s.split('').sort().join('')
            if (!map.get(sortedStr)) {
                map.set(sortedStr, [])
            }
            map.get(sortedStr).push(s)
        }
        return [...map.values()]
    }
}
