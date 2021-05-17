let box = document.getElementsByClassName("grid-item");
let sn = box[0];
let en = box[15];
sn.setAttribute("id", "start");
en.setAttribute("id", "end");

let r1 = box[4];
let r2 = box[8];
let r3 = box[9];
let r4 = box[10];
r1.setAttribute("id", "block");
r2.setAttribute("id", "block");
r3.setAttribute("id", "block");
r4.setAttribute("id", "block");

//path1
let sn1 = box[16];
let en1 = box[31];
sn1.setAttribute("id", "start");
en1.setAttribute("id", "end");

let a1 = box[20];
let a2 = box[24];
let a3 = box[25];
let a4 = box[26];
a1.setAttribute("id", "block");
a2.setAttribute("id", "block");
a3.setAttribute("id", "block");
a4.setAttribute("id", "block");

//path2
let sn2 = box[32];
let en2 = box[47];
sn2.setAttribute("id", "start");
en2.setAttribute("id", "end");

let b1 = box[36];
let b2 = box[40];
let b3 = box[41];
let b4 = box[42];
b1.setAttribute("id", "block");
b2.setAttribute("id", "block");
b3.setAttribute("id", "block");
b4.setAttribute("id", "block");

//path3
let sn3 = box[48];
let en3 = box[63];
sn3.setAttribute("id", "start");
en3.setAttribute("id", "end");

let c1 = box[52];
let c2 = box[56];
let c3 = box[57];
let c4 = box[58];
c1.setAttribute("id", "block");
c2.setAttribute("id", "block");
c3.setAttribute("id", "block");
c4.setAttribute("id", "block");

//path4
let sn4 = box[64];
let en4 = box[79];
sn4.setAttribute("id", "start");
en4.setAttribute("id", "end");

let d1 = box[68];
let d2 = box[72];
let d3 = box[73];
let d4 = box[74];
d1.setAttribute("id", "block");
d2.setAttribute("id", "block");
d3.setAttribute("id", "block");
d4.setAttribute("id", "block");

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
for (i = 0; i < paths.length; i++)
  paths[i].forEach((cordinate) => {
    // console.log(cordinate[0], cordinate[1]);
    x = cordinate[0];
    y = cordinate[1];
    if (x === 3 && y === 3) {
    } else {
      n = x * 4 + y + 16 * (i + 1);
      k = box[n];
      k.setAttribute("id", "path");
    }
  });

// Array.from(box).forEach((v) =>
//   v.addEventListener("click", function () {
//     v.style.background = "red";
//     //Maze();
//   })
// );
