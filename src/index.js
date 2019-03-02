module.exports = function check(str, bracketsConfig) {
  // your solution
  const str_lengt = str.length;
  const bracketsConfig_length = bracketsConfig.length;
  // console.log (str_lengt % 2);
  if (str_lengt % 2 !== 0) return false; 
  let open_br = [];//stek open brakets
  let close_br = [];//stek close brakets
  for (let i = 0; i < bracketsConfig_length; i++) {
    open_br.push(bracketsConfig[i][0]);
    close_br.push(bracketsConfig[i][1]);
  } 
  // console.log("полный "+str);
  // console.log("открыт "+open_br);
  // console.log("закрыт "+close_br); 

  let stak_br = [];//stek result brakets
  let flag = 1;

  for (let i = 0; i < str_lengt; i++) {
    if ((open_br.indexOf(str[i]) !== -1) && (close_br.indexOf(str[i]) !== -1)){
      if (flag === 1) {
        stak_br.push(str[i]);
        flag = -1;
      }
      else {
        let index_close = close_br.indexOf(str[i]);
        let el_open = open_br[index_close];
        let stak_br_lenght = stak_br.length - 1;
        if (el_open === stak_br[stak_br_lenght]){ 
          let el_stak = stak_br.pop();
          flag = 1;
        }
      } 
    }   
    else if ((open_br.indexOf(str[i]) !== -1) && (close_br.indexOf(str[i]) === -1)){  
    // console.log(str[i]);
    stak_br.push(str[i]);
    }
    else if ((open_br.indexOf(str[i]) === -1) && (close_br.indexOf(str[i]) !== -1)){
      let index_close = close_br.indexOf(str[i]);
      let el_open = open_br[index_close];
      //  console.log(index_close + "  "+el_open+ "  ");
      let stak_br_lenght = stak_br.length - 1;
      if (el_open === stak_br[stak_br_lenght]){ 
        let el_stak = stak_br.pop();
        // console.log("equal");
      }
    }
  }
  // console.log(newstr);
  // console.log(stak_br);
  if (stak_br.length !== 0)  return false;
  else return true; 
}
const sumbrackets = (length, newstr) => {
  
  let stak_br = [];
  let flag = 1;
  for (let i = 0; i < length; i++) {
    switch (newstr[i]) {
      case '(':
      stak_br.push(newstr[i]);
      break;
      case ')':
      let el_stak = stak_br.pop();
      //  console.log("el_stak "+el_stak);
      if (el_stak !== '(') return false;
      break;
      case '[':
      stak_br.push(newstr[i]);
      break;
      case ']':
      let el_stak1 = stak_br.pop();
      //  console.log("el_stak "+el_stak1);
      if (el_stak1 !== '[') return false;
      break; 
      case '|':
      if (flag !== -1) {
        stak_br.push(newstr[i]);
        flag = -1;
        // console.log(stak_br);
        break;
      }
      else {
        let el_stak2 = stak_br.pop();
        flag = 1;
        if (el_stak2 !== '|') return false;
        break;
      }
    }
  }
    // console.log(newstr);
    // console.log(stak_br);
    if (stak_br.length !== 0)  return false;
    else return true;
    // console.log(stak_br);

}