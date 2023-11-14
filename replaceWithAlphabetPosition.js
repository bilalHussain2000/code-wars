function alphabetPosition(text) {
    var arr = text.split("");
    var final = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == "a" || arr[i] == "A"){final.push("1");}
      else if(arr[i] == "b" || arr[i] == "B"){final.push("2");}
      else if(arr[i] == "c" || arr[i] == "C"){final.push("3");}
      else if(arr[i] == "d" || arr[i] == "D"){final.push("4");}
      else if(arr[i] == "e" || arr[i] == "E"){final.push("5");}
      else if(arr[i] == "f" || arr[i] == "F"){final.push("6");}
      else if(arr[i] == "g" || arr[i] == "G"){final.push("7");}
      else if(arr[i] == "h" || arr[i] == "H"){final.push("8");}
      else if(arr[i] == "i" || arr[i] == "I"){final.push("9");}
      else if(arr[i] == "j" || arr[i] == "J"){final.push("10");}
      else if(arr[i] == "k" || arr[i] == "K"){final.push("11");}
      else if(arr[i] == "l" || arr[i] == "L"){final.push("12");}
      else if(arr[i] == "m" || arr[i] == "M"){final.push("13");}
      else if(arr[i] == "n" || arr[i] == "N"){final.push("14");}
      else if(arr[i] == "o" || arr[i] == "O"){final.push("15");}
      else if(arr[i] == "p" || arr[i] == "P"){final.push("16");}
      else if(arr[i] == "q" || arr[i] == "Q"){final.push("17");}
      else if(arr[i] == "r" || arr[i] == "R"){final.push("18");}
      else if(arr[i] == "s" || arr[i] == "S"){final.push("19");}
      else if(arr[i] == "t" || arr[i] == "T"){final.push("20");}
      else if(arr[i] == "u" || arr[i] == "U"){final.push("21");}
      else if(arr[i] == "v" || arr[i] == "V"){final.push("22");}
      else if(arr[i] == "w" || arr[i] == "W"){final.push("23");}
      else if(arr[i] == "x" || arr[i] == "X"){final.push("24");}
      else if(arr[i] == "y" || arr[i] == "Y"){final.push("25");}
      else if(arr[i] == "z" || arr[i] == "Z"){final.push("26");}
    }
    return final.join(" ");
  }