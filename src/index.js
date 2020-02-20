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
    return flatten(
        matrix.map((x, index) => x.sort((a, b) => (index % 2 ? a + b : a - b)))
    );
};
