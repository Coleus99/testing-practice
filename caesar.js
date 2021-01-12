// latin a-z unicode 97-122
// latin A-Z unicode 65-90
// use string.charCodeAt(0)

let caesar = function(string, shift) {
  let res = '';
  for(let i=0; i<string.length;i++){
      let code = (string.charCodeAt(i));
      if(code >= 97 && code <=122){
          let newcode = (((code+shift-97)%26 +26) %26 ) +97;
        // let newcode = ((code+shift-97) %26 ) + 97;
          res += String.fromCharCode(newcode);
      }
      else if(code >= 65 && code <=90){
          let newcode = ( ( (code+shift-65)%26 +26) %26 ) +65;
          res += String.fromCharCode(newcode);
      }
      else{
          res += string[i];
      }
  }
  return res;
};

caesar('Hello, World!',-26);

module.exports = caesar