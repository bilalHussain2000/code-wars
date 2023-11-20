function exampleSort(arr,exampleArr){
    var o ={};
    //converting exampleArr into obj with values as index.
    exampleArr.forEach((element, index) => {
      o[element] = index + 1;
    });
    return arr.sort((a, b) => o[a] - o[b]);
  }