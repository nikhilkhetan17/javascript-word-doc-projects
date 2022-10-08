let quotes = [
  '"You cant be great if you dont feel great. Make exceptional health your number one priority." - Robin Sharma',
  '"Impossible is just an opinion." - Paulo Coelho',
  '"The secret of getting ahead is getting started." - Mark Twain',
  '"All our dreams can come true if we have the courage to pursue them." - Walt Disney',
  '"You cant be great if you dont feel great. Make exceptional health your number one priority." - Mark Twain',
  '"You cant be great if you dont feel great. Make exceptional health your number one priority." - Elvis Presley',
  '"If you think you are too small to make a difference, try sleeping with a mosquitoy." - Dalai Lama',
  '"Live each day like its your second to the last. That way you can fall asleep at night." - Jason Love',
  '"The big secret in life is that there is no secret. Whatever your goal, you can get there if youre willing to work." - Oprah Winfrey',
  '"When I had nothing to lose, I had everything. When I stopped being who I am, I found myself." - Paulo Coelho',
  '"In the middle of every difficulty lies opportunity." - Albert Einstein',
  '"The purpose of our lives is to be happy." — Dalai Lama',
];

// console.log(quotes.length);

let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  output.innerText = randomQuote;
});
