
var readlineSync = require("readline-sync");

let ua = readlineSync.question("What is your name ");
console.log("welocome " + ua);
let score = 0;
const que = [
  {
    question: `Where do i live
  a:indore
  b:bhopal
  c:ujjain`,
    answer: "a"
  },
  {
    question: `what is my hobby?
  a:coding
  b:teaching
  c:cricket`,
    answer: "a"
  },
  {
    question: `what is my age?
  a:18
  b:19
  c:20`,
    answer: "b"
  },
  {
    question: `I am student in college?
  a:davv
  b:iips
  c:medicaps`,
    answer: "a"
  },
  {
    question: `I like?
  a:listening song
  b:talking
  c:being alone`,
    answer: "a"
  },
];

function chek(que, ans) {
  let ua = readlineSync.question(que);
  console.log("\n");
  console.log("you answered " + ua);
  if (ua == ans) {
    console.log("right")
    score = score + 1;
  }
  else {
    console.log("wrong");
  }

  console.log("\n__________________________\n");
}

for (let i = 0; i < que.length; i++) {
  var cq = que[i];
  chek(cq.question, cq.answer);
}
console.log("\n");
console.log("you done\nyou scored " + score)