function areAdjacent(matrix, node1, node2) {
  if (
    node1 < 0 ||
    node2 < 0 ||
    node1 >= matrix.length ||
    node2 >= matrix.length
  ) {
    return false;
  }
  return matrix[node1][node2] === 1 || matrix[node2][node1] === 1;  //edge exist
}
console.log(
  areAdjacent(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    0,
    1
  )
);
console.log(
  areAdjacent(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    0,
    2
  )
);
console.log(
  areAdjacent(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    0,
    3
  )
);
console.log(
  areAdjacent(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    1,
    4
  )
);
