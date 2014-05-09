"use strict";

// object containing 5 other objects
var objQuiz = {};
objQuiz["q1"] = {
    question1: "Where is Kyle from?",
    answer1: "Idaho",
    answer2: "Utah",
    answer3: "Florida",
    answer4: "Washington"
};

objQuiz.q2 = {
    question2: "Who is from Idaho?",
    answer1: "Isaiah",
    answer2: "Aisha",
    answer3: "Jamie",
    answer4: "Andrew"
};

objQuiz.q3 = {
    question3: "Where is Sarah from?",
    answer1: "New York",
    answer2: "Utah",
    answer3: "Florida",
    answer4: "California"
};

objQuiz.q4 = {
    question4: "Who is from California?",
    answer1: "Aisha",
    answer2: "Andrew",
    answer3: "Jamie",
    answer4: "Christi"
};

objQuiz.q5 = {
    question5: "Where is Aisha from?",
    answer1: "Idaho",
    answer2: "New York",
    answer3: "Florida",
    answer4: "Washington"
};


//----------- Display questions and answers -----------------
var totalCounter = 0;
var answerCounter = 1;
var questionCounter = 1;

var createQA = function () {
    

    //The end
    if (questionCounter >= 6) {
        document.getElementById("next").style.display = "none";
        document.getElementById("score").innerHTML = "Your score is " + totalCounter + " out of 5."
        document.getElementById("meter").setAttribute("value", totalCounter);
        document.getElementById("meter").style.visibility = "visible";
    }
    
    //reset answer label
    document.getElementById("checkAnswer").innerHTML = "";
    document.getElementById("checkAnswer").style.color = "green";

    //create question div
    document.getElementById("main").innerHTML = "<div id='x'></div>";
    document.getElementById("x").setAttribute("class", "question");
    document.getElementById("x").setAttribute("id", "question" + questionCounter);
    
    //insert question1
    document.getElementById("question" + questionCounter).innerHTML = objQuiz["q" + questionCounter]["question" + questionCounter];

    //hide start button
    document.getElementById("start").style.display = "none";

    //show next button
    document.getElementById("next").style.visibility = "visible";

    //create answers
    for (var i = 1; i < 5; i++) {
        document.getElementById("question" + questionCounter).innerHTML += "<p id='x'></p>";
        document.getElementById("x").setAttribute("class", "answers");
        document.getElementById("x").setAttribute("onclick", "checkAnswerFunc(this.id);");
        document.getElementById("x").setAttribute("id", ("answer" + answerCounter));
        document.getElementById("answer" + answerCounter).innerHTML = objQuiz["q" + questionCounter]["answer" + i];
        answerCounter++;
    }
    //question counter
    questionCounter++;

}


//----------- Check the answer and keep score -----------------

var clickCounter = 2;
var checkAnswerFunc = function (answerId) {
    "use strict";
    
    if (questionCounter === clickCounter) {
        switch (answerId) {
            case "answer4": document.getElementById("checkAnswer").innerHTML = "Correct! Awesome!";
                totalCounter++;
                clickCounter++;
                document.getElementById(answerId).setAttribute("onclick", "");
                break;
            case "answer5": document.getElementById("checkAnswer").innerHTML = "Correct! Awesome!";
                totalCounter++;
                clickCounter++;
                document.getElementById(answerId).setAttribute("onclick", "");
                break;
            case "answer11": document.getElementById("checkAnswer").innerHTML = "Correct! Awesome!";
                totalCounter++;
                clickCounter++;
                document.getElementById(answerId).setAttribute("onclick", "");
                break;
            case "answer14": document.getElementById("checkAnswer").innerHTML = "Correct! Awesome!";
                totalCounter++;
                clickCounter++;
                document.getElementById(answerId).setAttribute("onclick", "");
                break;
            case "answer18": document.getElementById("checkAnswer").innerHTML = "Correct! Awesome!";
                totalCounter++;
                clickCounter++;
                document.getElementById(answerId).setAttribute("onclick", "");
                break;
            default: document.getElementById("checkAnswer").innerHTML = "Wrong!";
                document.getElementById("checkAnswer").style.color = "red";
                document.getElementById(answerId).setAttribute("onclick", "");
                clickCounter++;
        }
    }
    else { alert("You have already answered. Click the Next button for the next question");}
}