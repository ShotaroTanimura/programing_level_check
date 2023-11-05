reader.on('close', () => {
  const headData = lines.splice(0,1)
  const splitHeadData = headData[0].split(' ')
  const routeN = parseInt(splitHeadData[0])
  const stationM = parseInt(splitHeadData[1])
  const feeArray = lines.splice(0,routeN)
  let pushFeeArray= [];//料金のマトリックス
  for (let fee of feeArray){
      pushFeeArray.push(fee.split(' '))
  }
  const pushFeeArrayInt = changeArrayToInt(pushFeeArray)
  const mustRouteX = lines.splice(0,1);//通るルートの数
  const destinations = []
  for (let line of lines){
      destinations.push(line.split(' '))
  }
  const destinationsInt = changeArrayToInt(destinations);//経由するルート
  const totalFee = calcuFee(pushFeeArrayInt,destinationsInt);
  
console.log(totalFee);
});



function changeArrayToInt(stringArray){
  let intArrays = []
  for(let array1 of stringArray){
      let intArray =[]
      for(let array2 of array1){
          intArray.push(parseInt(array2))
      }
      intArrays.push(intArray)
  }
  return intArrays
}

function calcuFee(feeArray,destinations){
  let totalFee = 0;
  let countflag =0;
  let previousY = 0;
  for(let destination of destinations){
      let rowX = destination[0]-1
      let columnY = destination[1]-1
      if(countflag ===0){
          totalFee += feeArray[rowX][columnY]
      }
      else{
          totalFee += Math.abs(feeArray[rowX][previousY] - feeArray[rowX][columnY])
      }
      previousY = [columnY]
      countflag ++;
  }
  return totalFee
}