module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr  = str.split(''),
  sum = 0,
  st = [],
  prom = [],
  prom7 = [],
  prom8 = [];
  
  for(let j = 0; j < arr.length; j++) {
    if (arr[j] == '|') {
        prom.push(arr[j]);
        for(let p = 0; p < prom.length; p++) {
            if(p % 2 != 0) {
                prom[p] = '>';
                arr[j] = prom[p];
            } else {
                prom[p] = '<';
                arr[j] = prom[p];
            }
        }
    } else if (arr[j] == '7') {
        prom7.push(arr[j]);
        for(let p = 0; p < prom7.length; p++) {
            if(p % 2 != 0) {
                prom7[p] = '?';
                arr[j] = prom7[p];
            } else {
                prom7[p] = '!';
                arr[j] = prom7[p];
            }
        }
      } if (arr[j] == '8') {
        prom8.push(arr[j]);
        for(let p = 0; p < prom8.length; p++) {
            if(p % 2 != 0) {
                prom8[p] = '.';
                arr[j] = prom8[p];
            } else {
                prom8[p] = ',';
                arr[j] = prom8[p];
            }
        }
    }

  }

for (let i in arr) {
  if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{' || arr[i] == '1' || arr[i] == '3' || arr[i] == '5' || arr[i] == '<' || arr[i] == '!' || arr[i] == ',') {
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
  } else if (arr[i] == '>') {
      if (st.pop() != '<') {
          return false;
      }
  } else if (arr[i] == '?') {
    if (st.pop() != '!') {
        return false;
    }
} else if (arr[i] == '.') {
    if (st.pop() != ',') {
        return false;
    }
}
}

return !st.length;
}
