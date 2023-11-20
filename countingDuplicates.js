function duplicateCount(text){
    text = text.toLowerCase();
    const charCount = {};
    for(let char of text){
      if (charCount[char]){
        charCount[char]++;
      } 
      else{
        charCount[char] = 1;
      }
    }
    let duplicateCount = 0;
    for(let count in charCount){
      if (charCount[count] > 1){
        duplicateCount++;
      }
    }
    return duplicateCount;
  }