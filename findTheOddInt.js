function findOdd(A) {
    var obj = {};
    for(var num of A){
      if(obj[num]){
        obj[num]++;
      }
      else{
        obj[num] = 1;
      }
    }
    var result;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === 1 || obj.hasOwnProperty(key) && obj[key] === 3 || obj.hasOwnProperty(key) && obj[key] === 5 || obj.hasOwnProperty(key) && obj[key] === 7 || obj.hasOwnProperty(key) && obj[key] === 9) {
        result = key;
      }
    }
    return parseInt(result);
  }