function solution(number){
    var arr = [];
    var i = 0;
    var count = 0;
    if(number < 0){return 0;}
    else{
      for(i = 1; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){
          arr.push(i);
        }
      }
    }
    for(i = 0; i < arr.length; i++){
      count = count + arr[i]; 
    }
    return count;
  }