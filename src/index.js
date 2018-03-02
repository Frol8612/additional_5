module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr  = str.split(''),
  sum = 0,
  st = [],
  prom = [];
  
  for(let j = 0; j < arr.length; j++) {
    if (arr[j] == '|' || arr[j] == '7' || arr[j] == '8') {
        prom.push(arr[j]);
        for(let p = 0; p < prom.length; p++) {
            if(p % 2 != 0) {
                prom[p] = ')';
                arr[j] = prom[p];
            } else {
                prom[p] = '(';
                arr[j] = prom[p];
            }
        }
 }
    
} 
for (let i in arr) {
  if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{' || arr[i] == '1' || arr[i] == '3' || arr[i] == '5') {
      st.push(arr[i]);
      
  } else if (arr[i] == ')') {
     if (st.pop() != '(') {
         return false;
     }
  } else if (arr[i] == ']') {
      if (st.pop() != '[') {
          return false;
      }
  } else if (arr[i] == '}') {
      if (st.pop() != '{') {
          return false;
      }
  } else if (arr[i] == '2') {
      if (st.pop() != '1') {
          return false;
      }
  } else if (arr[i] == '4') {
      if (st.pop() != '3') {
          return false;
      }
  } else if (arr[i] == '6') {
      if (st.pop() != '5') {
          return false;
      }
  }
}

return !st.length;
}
