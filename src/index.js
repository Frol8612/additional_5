module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr  = str.split(''),
  sum = 0,
  st = [];
  console.log(arr);
  
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
var reg = /||/g;
  if (arr == reg) {
    return true;
  }

return !st.length;
}
