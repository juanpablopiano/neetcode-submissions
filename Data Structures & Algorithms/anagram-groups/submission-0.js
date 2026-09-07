class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = []
        const map = new Map()
        strs.forEach(s => {
            const sortedStr = [...s].toSorted().join("")
            if (!map.get(sortedStr)) {
                map.set(sortedStr, [])
            }
        })
        strs.forEach(s => {
            const sortedStr = [...s].toSorted().join("")
            map.get(sortedStr).push(s)
        })
        map.values().forEach(a => result.push(a))
        return result
    }
}
