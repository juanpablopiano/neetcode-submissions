class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const a = [...s].toSorted().join("")
        // const b = [...t].toSorted().join("")

        // return a == b
        if (s.length != t.length) return false
        const map = new Map()
        for (const letter of s ) {
            const val = map.get(letter)
            if (val) {
                map.set(letter, val + 1)
            } else {
                map.set(letter, 1)
            }
        }
        
        for (const letter of t) {
            const val = map.get(letter)
            if (val) {
                map.set(letter, val - 1)
            }
        }
        return [...map.values()].every(a => a === 0)
    }
}
