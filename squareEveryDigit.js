function squareDigits(num){
    var i = 0;
    //change number to a string then spliting it into arr
    var arr = num.toString().split("");
    var nArr = [];
    var pArr = [];
    //making every string value of arr into int.
    for(i = 0; i < arr.length; i++){
      nArr.push(parseInt(arr[i], 10))
    }
    //squaring every array value
    for(i = 0; i < nArr.length; i++){
      pArr.push(nArr[i] * nArr[i]);
    }
    //joining every value and converting to int.
    return parseInt(pArr.join(""));
  }