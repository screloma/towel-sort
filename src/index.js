module.exports = function towelSort(matrix) {
    const flatten = arr =>
        arr.reduce(
            (acc, value) =>
                acc.concat(Array.isArray(value) ? flatten(value) : value),
            []
        );
    if (matrix == undefined) {
        return [];
    }
    return flatten(matrix.map((x, index) => (index % 2 ? x.reverse() : x)));
};
