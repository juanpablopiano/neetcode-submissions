class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const s = new Set()
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = board[i][j]
                if (num === ".") continue
                
                const rStr = `r${i}${num}`
                const cStr = `c${j}${num}`

                const bRow = Math.floor(i / 3);
                const bCol = Math.floor(j / 3);
                const bStr = `b${bRow}${bCol}${num}`

                if (s.has(rStr) || s.has(cStr) || s.has(bStr))
                    return false
                

                s.add(rStr);
                s.add(cStr);
                s.add(bStr);
            }
        }
        return true;
    }
}
