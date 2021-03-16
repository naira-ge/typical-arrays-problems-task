/* Implement 3 functions: max, min, and avg for searching
 minimal value, maximal value, and an average value of a given array*/

function min(array) {

if(typeof array == 'undefined' || array.length == 0 || !Array.isArray(array)){
    return 0;
}else { 
    let min = array[0];

  for(let i = 1; i < array.length; i++){
    let value = array[i];
    min = (value < min) ? value : min
  }
  return min;
 }
}

function max(array) {

 if(typeof array == 'undefined' || array.length == 0 || !Array.isArray(array)){
  return 0;
} else {
    let max = array[0];

    for(let i = 1; i < array.length; i++){
        let value = array[i];
        max = (value > max) ? value : max;
    }
    return max;
      
    }
}

function avg(array) {

if((typeof array == 'undefined') || array.length == 0 || !Array.isArray(array)){
    return 0;
}else{
    let sum = array.reduce((total, item) => total + item, 0)
    return (sum/array.length);
      }
}
