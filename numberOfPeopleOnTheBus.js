var number = function(busStops){
    var total = 0;
    for(var [on, off] of busStops){
      total = total + on;
      total = total - off;
    }
    return total;
  }