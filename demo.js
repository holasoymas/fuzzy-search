export function calcEditDistance(left, right) {

  const ll = left.length + 1;
  const rl = right.length + 1;

  // rows = right, cols = left
  const arr = Array.from({ length: rl }, () => Array(ll).fill(0));

  // init
  for (let i = 0; i < ll; i++) arr[0][i] = i;
  for (let i = 0; i < rl; i++) arr[i][0] = i;

  for (let i = 1; i < rl; i++) {

    for (let j = 1; j < ll; j++) {
    
      if (right[i - 1] === left[j - 1]) {
    
        arr[i][j] = arr[i - 1][j - 1];
      } else {
    
        const replace = arr[i - 1][j - 1];
    
        const remove = arr[i - 1][j];
    
        const insert = arr[i][j - 1];

        arr[i][j] = Math.min(replace, remove, insert) + 1;
      }
    }
  }
  
  return arr[rl - 1][ll - 1];
}

export function returnMatched(array, tolorance = 3, word) {

  let arr = [];
  
  for (const item of array) {
  
    const tolo = calcEditDistance(item, word);
  
    // console.log(item + " : tolorance level = " + tolo);
  
    if (tolo <= tolorance) {
  
      arr.push(item);
    }
  }
  
  return arr;
}

