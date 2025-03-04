/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let column = [];
    for (let i = 0; i < matrix.length; i++) {
        let flag = false;
        matrix[i].forEach((item, index) => {
            if (item === 0) {
                flag = true;
                column.push(index);
                column = [...new Set(column)];
            }
        });
        if (flag) {
            matrix[i].fill(0);
        }
    }
    matrix.forEach(item => {
        column.forEach(e => {
            item[e] = 0
        })
    })
    console.log(matrix)

};

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])