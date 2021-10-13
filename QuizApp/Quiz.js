const question = require("./Question_quiz");

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const color = require("chalk");
let blueBright = color.bold.blueBright
let green = color.bold.green
let red = color.bold.red
let cyan = color.bold.cyan
let yellow = color.bold.yellow
let title = color.black.bold.yellow

var username = "";
var qNo = 1;
var answer = "";
var notes = "";
var score = 0;

var getQuestions = () => {
  var data = question.filter((o) => o.no == qNo);
  data.forEach(noq => {
      console.log(`\nNo: ${noq.no}`);
      console.log(`Question: ${noq.qus}`);
      console.log(`\na: ${noq.a}`);
      console.log(`\nb: ${noq.b}`);
      console.log(`\nc: ${noq.c}`);
      console.log(`\nd: ${noq.d}`);
      answer = noq.ans;
      notes = noq.note;
  });
};

var checkAns = () => {
   if(qNo <= 10){
        rl.question(title("\nGive Answer: "),(ans) => {
          if(ans == "a" || ans == "b" || ans == "c" || ans == "d"){
           if(ans == answer){
              score += 5;
              console.log(green("\nRight Answer :"+ ans));
              console.log(blueBright("Your Score :" +score));
              qNo += 1;
              repeat();
           }else{
              score -= 2;
              console.log(red("\nwrong Ans:" +ans));
              console.log(blueBright("Your Score :" +score));
              console.log(green("\nRight Answer is:" + notes));
              qNo += 1;
              repeat();
           }
          }else{
            console.log(red("\nWrong Choice,please try again"));
            repeat();
          }
        });
   }else{
     console.log(title("\nQuiz Complete.."));
     console.log(title(`\nUserName:${username} Your Final Score Is:${score}`));
     rl.close();
   }
}

var repeat = () =>{
   getQuestions();
   checkAns();
};

console.log(title("Welcome to C# Quiz..!"));
rl.question(title("\nplease Enter Your Name : "),(ans) => {
   username = ans;
   repeat();
});