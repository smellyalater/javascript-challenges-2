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
//I'm assuming there is a way to automate/loop through the console log output, I don't know how to do it and the way it stands satisfies all requirements so I'm just going to leave it.
console.log(ralph.name + " got a " + ralph.score + " on the test.");
console.log(zack.name + " got a " + zack.score + " on the test.");
console.log(tony.name + " got a " + tony.score + " on the test.");



/*
2. Create a form on a Web page where a user can enter the year they were born. When the user submits the form, it should display text on the page that says:

This person is x years old
 

Note: To do this one, read up on the jQuery .submit() handler https://api.jquery.com/submit/. Pay close attention to the event.preventDefault() line in the examples. What happens if you leave that out?
*/


//<AMC>No idea how to get this to work. So frusturating.

//On submit, the form captures the birth year. 
$('#form-submit').submit(function (event) {
var year = $('#entered-year').val();//is this .value() or .val()?
event.preventDefault();
});
//Then a function subtracts 2015 - birth year.
 var age = 2015 - year;
//Then we say that the person is xx years old. 
$('#put-age-in-here').text("This person is " + age + " years old.");





