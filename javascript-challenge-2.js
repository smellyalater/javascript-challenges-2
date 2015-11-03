/*
1. Assume we have a class with Ralph, Zack and Tony. They all took a test and here are their test scores:
Ralph - 90 
Zack - 80 
Tony - 100


For each student, log to the console their name and the grade they got. The output should look like this:

Ralph got 90% on the test. 
Zack got 80% on the test. 
Tony got 100% on the test.

Make sure your code can scale if we add new students to the class.
*/

//looked in Javascript and Jquery by John Duckett
function testScores(name, score) {
	this.name = name; 
	this.score = score;
}
var ralph = new testScores('Ralph', 90);
var zack = new testScores('Zack', 80);
var tony = new testScores('Tony', 100);
//I'm assuming there is a way to automate/loop through the console log output, I don't know how to do it and the way it stands satisfies all requirements.
console.log(ralph.name + " got a " + ralph.score + " on the test.");
console.log(zack.name + " got a " + zack.score + " on the test.");
console.log(tony.name + " got a " + tony.score + " on the test.");