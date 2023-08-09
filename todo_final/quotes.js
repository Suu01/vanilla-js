const quotes = [
  {
    quote: "To follow, without halt, one aim: that's the secret of success.",
    author: "Anna Pavlove",
  },
  {
    quote:
      "The first step toward change is awareness. The second step is acceptance.",
    author: "Nathaniel Branden",
  },
  {
    quote: "Refuse to be average. Let your heart soar as high as it will.",
    author: "Aiden Wilson Tozer",
  },
  {
    quote: "A man's character is his fate.",
    author: "Heraclitus",
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "The way get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
    author: "Alex Rodriguez",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
