const quotes = [
  {
    quote: "해보는거야 지금 아니면 영원히 못해",
    author: "스누피 '찰리브라운'",
  },
  {
    quote: "넌 아주 사랑스런 사람이며, 네 인생은 사랑으로 가득차리라",
    author: "스누피 '찰리브라운'",
  },
  {
    quote: "아직 시간은 충분해 넌 할 수 있어",
    author: "스누피 '찰리브라운'",
  },
  {
    quote: "너무 많이 보고 싶었어 나는 너가 너무 좋아",
    author: "스누피 '찰리브라운'",
  },
  {
    quote: "자신에게 이렇게 말해줘라 넌 할 수 있다. 해낼 능력이 있다",
    author: "스누피 '찰리브라운'",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// 랜덤으로 명언과 작가 뽑아줌.

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 랜덤으로 뽑은 명언과 작가 하나를 -> 상수에 입력시켜 줌.

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;
