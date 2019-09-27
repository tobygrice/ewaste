// a heavily edited version of the one you gave us, using jquery

var i, questions, currentQuestion, correctAnswers, mistakes;

questions = [{
	question: "How much e-waste is expected to be generated this year?",
	choices: ["33.2 megatons", "44.7 megatons", "50.7 megatons", "26.7 megatons"],
	correctAnswer: "50.7 megatons"
}, {
	question: "How much money did we lose to e-waste in 2016?",
	choices: ["$7.1 million", "$9.6 billion", "$7.1 billion", "$9.6 million"],
	correctAnswer: "$9.6 billion"
}, {
	question: "How much more e-waste (than 2018) is Australia expected to generate in 2023?",
	choices: ["10%", "32%", "51%", "60%"],
	correctAnswer: "60%"
}, {
	question: "How much e-waste does the average Aussie household generate each year?",
	choices: ["73 kilograms", "1.7 kilograms", "17 kilograms", "730 kilograms"],
	correctAnswer: "73 kilograms"
}, {
	question: "An extra ______ of e-waste is generated each year.",
	choices: ["2 megatons", "20 megatons", "10 megatons", "1 megaton"],
	correctAnswer: "2 megatons"
}, {
	question: "50% of all e-waste is made up of discarded ________",
	choices: ["iPhones", "Laptops", "Vehicles", "Home appliances"],
	correctAnswer: "Home appliances"
}, {
	question: "A tonne of computers has more gold than ______ of gold ore.",
	choices: ["17 grams", "17 kilograms", "17 tonnes", "17 megatons"],
	correctAnswer: "17 tonnes"
}, {
	question: "What percentage of e-waste is collected and properly recycled?",
	choices: ["20%", "40%", "60%", "80%"],
	correctAnswer: "20%"
}, {
	question: "What percentage of Aussie households have a TV?",
	choices: ["56%", "71%", "89%", "99%"],
	correctAnswer: "99%"
}, {
	question: "On average, what percentage of the materials in a TV can be recycled?",
	choices: ["62%", "73%", "95%", "99%"],
	correctAnswer: "95%"
}];


mistakes = "";
currentQuestion = 0;
correctAnswers = 0;

function displayCurrentQuestion(){    
    $(document).find("#question").text(questions[currentQuestion].question);
    $(document).find("#head").text("QUESTION " + String(currentQuestion+1))
	for (i=0; i < 4; i++) {
        $(document).find("#a" + String(i+1)).text(questions[currentQuestion].choices[i]);
	}
}

$(document).ready(function(){
	displayCurrentQuestion();
    $(document).find("#scorecard").hide();
    $(document).find("#a1, #a2, #a3, #a4").click(function(){
        if ($(this).text() == questions[currentQuestion].correctAnswer){
            correctAnswers++;
        } else {
            rel_q = questions[currentQuestion].question;
            wrong_a = $(this).text();
            right_a = questions[currentQuestion].correctAnswer;
            mistakes += (rel_q + "\nYour answer: " + wrong_a + "\nCorrect Answer: " + right_a + "\n\n")
        }
        currentQuestion++;
        if (currentQuestion < questions.length) { // there are still more questions to come
            displayCurrentQuestion(); // display the next question
        } else {
            $(document).find("#a1, #a2, #a3, #a4, #question").hide();
            $(document).find("#result, #retry, #scorecard").show();
            $(document).find("#head").text("RESULTS");
            $(document).find("#result").text("You scored " + correctAnswers + " out of " + questions.length + "!");
            $(document).find("#mistakes").text(mistakes);
            $(document).find("#retry").text("Play Again?");
            $(document).find("#retry").click(function(){
                currentQuestion = 0;
                correctAnswers = 0;
                mistakes = "";
                $(document).find("#retry, #result, #scorecard").hide();
                $(document).find("#a1, #a2, #a3, #a4, #question").show();
                displayCurrentQuestion();
            });
        }
    });
});
