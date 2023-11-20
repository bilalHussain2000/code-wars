function mainDiagonalProduct(mat){
    var i = 0, j =0;
    var result = 1;
    for(i = 0; i < mat.length; i++){
      for(j = 0; j < mat.length; j++){
        if(i == j){
          result = result * mat[i][j]
        }
      }
    }
    return result;
  }