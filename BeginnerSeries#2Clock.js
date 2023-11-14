function past(h, m, s){
    var hoursIntoSeconds = h*60*60;
    var minutesIntoSeconds = m*60;
    var total = hoursIntoSeconds + minutesIntoSeconds + s;
    return total*1000;
  }