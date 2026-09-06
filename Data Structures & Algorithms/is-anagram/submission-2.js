class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        
        const arr = new Array(27).fill(0)
        for (let i = 0; i < s.length; i++) {
            arr[s[i].codePointAt(0) - 97]++
            arr[t[i].codePointAt(0) - 97]--
        }

        return arr.every(a => a === 0)
    }
}
