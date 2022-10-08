const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const string = document.getElementById("input").value;

  checkPalindrome(string);
});

function checkPalindrome(str) {
  const output = document.getElementById("output");

  // convert string to an array
  const arrayValues = str.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join("");

  if (str === reverseString) {
    return (output.innerText = "Yes it is a Palindrome!!");
  } else {
    output.innerText = "No it is not a Palindrome!!";
  }
}
