process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const firstLine = lines.splice(0,1)
  const splitFirstLine = firstLine[0].split(' ')
  for (let n=0; n < splitFirstLine.length; n++){
      splitFirstLine[n] = parseInt(splitFirstLine[n])
  }
  const rows = splitFirstLine[0];
  const columns = splitFirstLine[1]
  const result = findDoughnut(lines, rows, columns)
  
  console.log(result);
});

// function findDoughnut(lines, rows, columns){

//     let doughnutFlag =0;
//     let sharpFlag =0;
//     for (let row =0; row < rows;row++){
//         if(row === rows-2){
//             break;
//         }
//         for(let column=0; column < columns; column++){
            
//             if(lines[row][column]==="#"){
//                 sharpFlag++;
//             }
//             if(lines[row][column]==="."){
//                 sharpFlag=0;
//             }
//             if(sharpFlag === 3){
//                 if(lines[row+1][column-2]==="#" && lines[row+1][column-1]==="." && lines[row+1][column]==="#" ){
//                     if(lines[row +2][column-2]==="#"&&lines[row +2][column-1]==="#"&&lines[row +2][column]==="#"){
//                        doughnutFlag++; 
//                     }
//                 }
//                 sharpFlag = 1;
//             }
//         }
//         sharpFlag = 0;
//     }
//     return doughnutFlag;
// }
function findDoughnut(lines, rows, columns){
  let doughnutCount = 0;

  for (let row = 0; row <= rows - 3; row++) {
      for (let column = 0; column <= columns - 3; column++) {
          if (isValidDoughnut(lines, row, column)) {
              doughnutCount++;
          }
      }
  }
  return doughnutCount;
}

function isValidDoughnut(lines, row, column) {
  return lines[row][column] === "#" &&
         lines[row][column + 1] === "#" &&
         lines[row][column + 2] === "#" &&
         lines[row + 1][column] === "#" &&
         lines[row + 1][column + 1] === "." &&
         lines[row + 1][column + 2] === "#" &&
         lines[row + 2][column] === "#" &&
         lines[row + 2][column + 1] === "#" &&
         lines[row + 2][column + 2] === "#";
}