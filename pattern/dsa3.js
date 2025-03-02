console.clear();

function program2(){
    
}

function program1() {
  function checkPalindrome(str, s, e) {
    while (s <= e) {
      if (str[s] !== str[e]) {
        return false;
      } else {
        s++;
        e--;
      }
    }
    return true;
  }

  var data = "faizan alam";
  var data = "racecar";
  var data = "noon";
  var data = "moon";
  var data = "sus";
  let end = data.length - 1;
  if (checkPalindrome(data, 0, end)) {
    console.log("It is Palindrome");
  } else {
    console.log("It is not Palidrome");
  }
}

// program1()