function findNextSquare(sq) {
    var sqr = Math.sqrt(sq);
    var check = Number.isInteger(sqr)
    var i = sq + 1;
    if(check == false){return -1;}
    else{
      while(Number.isInteger(Math.sqrt(i)) != true){
        i++
      }
      return i;
    }
  }