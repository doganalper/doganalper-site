type BookLog = {
  name: string;
  author: string;
  link: string;
};

const bookLog: BookLog[] = [
  {
    name: "Rabıta",
    author: "Uğur Mumcu",
    link: "https://www.goodreads.com/book/show/12391503-rab-ta",
  },
  {
    name: "Kitchen Confidential: Adventure in the Culinary Underbelly",
    author: "Anthony Bourdain",
    link: "https://www.goodreads.com/book/show/33313.Kitchen_Confidential",
  },
  {
    name: "The Iron Heel",
    author: "Jack London",
    link: "https://www.goodreads.com/book/show/929783.The_Iron_Heel",
  },
  {
    name: "Social Justice and the City",
    author: "David Harvey",
    link: "https://www.goodreads.com/book/show/184940.Social_Justice_and_the_City",
  },
  {
    name: "Chronicle of a Death Foretold",
    author: "Gabriel García Márquez",
    link: "https://www.goodreads.com/book/show/23878.Chronicle_of_a_Death_Foretold",
  },
];

export { bookLog, type BookLog };
