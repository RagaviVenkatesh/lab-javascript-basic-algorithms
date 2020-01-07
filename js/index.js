// Iteration 1: Names and Input
var hacker1 = "Ragavi";
console.log("The driver's name is",hacker1);
var hacker2 = "Venkatesh";
console.log("The driver's name is",hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{
    Console.log("The driver has the longest name, it has",hacker1.length,"characters.");
}
else if(hacker2.length > hacker1.length)
{
    console.log("It seems that the navigator has the longest name, it has",hacker2.length,"characters.");
}
else{
    console.log("Wow, you both have equally long names,",hacker2.length,"characters");
}
// Iteration 3: Loops
var hacker1=hacker1.toUpperCase();
console.log(hacker1.split('').join(''));
console.log(hacker2.split('').reverse().join(''));
if(hacker1<hacker2)
    console.log("The driver's name goes first.");
else if(hacker2<hacker1)
    console.log("Yo, the navigator goes first definitely.");
else
    console.log("What?! You both have the same name?");

//Bonus1
var str1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores commodi asperiores adipisci quam doloribus. Sed eius cupiditate aliquid cumque culpa enim modi deserunt quia odit, quasi sunt harum dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur eum sunt minus, corporis quod ex quam possimus placeat ipsam recusandae earum impedit facilis obcaecati sit magnam, eos commodi cumque!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in, debitis saepe quibusdam porro totam odit aliquid, est distinctio eos quas inventore dolore veritatis aliquam, pariatur quod deserunt cumque? Ab?";
var count = str1.split(" ").length;
console.log(count);
var count1 = str1.match(/et/g).length;
console.log(count1);

//Bonus2
var phraseToCheck = "RACE ,CAR";
phraseToCheck =  phraseToCheck.replace(/[\W_]/g, "");
var ReversePhrase = phraseToCheck.split('').reverse().join('');
if(phraseToCheck==ReversePhrase)
{
    console.log("Palindrome");
}
else
{
    console.log("Not a Palindrome");
}