function highAndLow(numbers){
    var s = numbers.split(" ");
    var t = s.sort(function(a, b){return a - b})
    return `${t[t.length - 1]} ${t[0]}`;
  }