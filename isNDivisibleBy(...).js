function isDivisible(n , ...r){
    if(r.length === 0){return true;}
    else{
      for(var i = 0; i < r.length; i++){
        if(n % r[i] !== 0){
          return false;
        }
      }
      return true;
    }
  }