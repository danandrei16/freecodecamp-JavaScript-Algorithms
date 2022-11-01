function rot13(str) {
  var caesarStr = '';
  
  for (let i in str) {
    if (/[A-Z]/.test(str[i])) {
      var asci = str.charCodeAt(i); // working with ascii codes
      asci += 13; // rotr13
      if (asci > 90)
        asci -= 26; // circlular rotr from Z to A
      asci = String.fromCharCode(asci); // back to char
      caesarStr += asci;
    }
    else
      caesarStr += str[i]; // non-alpha chars dont change
  }
  return caesarStr;
}

rot13("SERR PBQR PNZC");