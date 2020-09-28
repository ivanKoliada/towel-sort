

module.exports = function towelSort(matrix) {
   return !matrix ? [] : matrix.map((e, i, matrix) => i % 2 !== 0 ? e.reverse() : e).flat();
}


