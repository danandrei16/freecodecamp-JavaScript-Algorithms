function palindrome(str) {
  // building equivalent string with only alpha-numeric characters
  const regExp = /[a-z0-9]/gi;
  let string = str.match(regExp);
  string = string.join("");
  string = string.toLowerCase(); // only lowercase

  // building reverseString from string backwards
  let reverseString = "";
  let len = string.length;
  for (let i = len - 1; i >= 0; i--)
    reverseString += string[i];

  // comparing the original with its reverse
  return string == reverseString;
}

palindrome("eye");