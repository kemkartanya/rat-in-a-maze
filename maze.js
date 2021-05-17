const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(4, 4);

function makeAnsPath(rows, cols) {
  var container = document.createElement("div");
  container.setAttribute("id", "solcon");
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  return container;
}

function Maze() {
  let rows = 4;
  let columns = 4;
  let matrix = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0));
  matrix[2][0] = 1;
  matrix[2][1] = 1;
  matrix[2][2] = 1;
  matrix[1][0] = 1;

  let paths = calculatePaths(matrix, 0, 0, rows, columns);
  console.log(paths);

  var sol = document.createElement("div");
  sol.setAttribute("id", "sol");
  document.body.appendChild(sol);

  for (i = 0; i < paths.length; i++)
    loadCells(matrix, 4, 4, paths[i], sol, 16 * (i + 1));
  return;
}

function calculatePaths(matrix, i, j, rows, columns) {
  let paths = [];

  let visited = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0));
  calculatePathsUtil(matrix, visited, i, j, rows, columns, [], paths);
  console.log("pathCount", paths.length);
  return paths;
}
function calculatePathsUtil(
  matrix,
  visited,
  i,
  j,
  rows,
  columns,
  currentpath,
  paths
) {
  // console.log("i", i, "j", j);
  if (i < 0 || i >= rows || j < 0 || j >= columns) return;
  if (matrix[i][j] === 1 || visited[i][j] === 1) return;
  if (i === rows - 1 && j === columns - 1) {
    //console.log("found a path");
    paths.push([...currentpath]);
    visited[i][j] = 0;
    return;
  }
  visited[i][j] = 1;
  //up
  currentpath.push([i - 1, j]);
  calculatePathsUtil(
    matrix,
    visited,
    i - 1,
    j,
    rows,
    columns,
    currentpath,
    paths
  );
  currentpath.pop();

  //down
  currentpath.push([i + 1, j]);
  calculatePathsUtil(
    matrix,
    visited,
    i + 1,
    j,
    rows,
    columns,
    currentpath,
    paths
  );
  currentpath.pop();
  //right
  currentpath.push([i, j + 1]);
  calculatePathsUtil(
    matrix,
    visited,
    i,
    j + 1,
    rows,
    columns,
    currentpath,
    paths
  );
  currentpath.pop();
  //left
  currentpath.push([i, j - 1]);
  calculatePathsUtil(
    matrix,
    visited,
    i,
    j - 1,
    rows,
    columns,
    currentpath,
    paths
  );
  currentpath.pop();

  visited[i][j] = 0;

  return;
}

function loadCells(mat, rows, columns, path, sol, m) {
  //   console.log(path);
  let matrix = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0));
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      matrix[i][j] = mat[i][j];
    }
  }
  path.forEach((cordinate) => {
    // console.log(cordinate[0], cordinate[1]);
    matrix[cordinate[0]][cordinate[1]] = 2;
  });

  console.log(matrix);
  let a = makeAnsPath(4, 4);
  sol.appendChild(a);

  return;
}

Maze();
