"use strict";

// prototype object
var protoObj = {
    Author: "Wasim"
};

// object containing 5 other objects
var objQuiz = {};
objQuiz = Object.create(protoObj);
objQuiz["q1"] = {
    question1: "1. What is the capital of Kenya?",
    answer1: "Chicago",
    answer2: "Adis Ababa",
    answer3: "Jakarta",
    answer4: "Nairobi"
};

objQuiz.q2 = {
    question2: "2. What is the capital of Finland?",
    answer1: "Helsinki",
    answer2: "CopenHagen",
    answer3: "Oslo",
    answer4: "Stockholm"
};

objQuiz.q3 = {
    question3: "3. What is the capital of Malaysia?",
    answer1: "Dhaka",
    answer2: "Khatmandu",
    answer3: "Kuala Lampur",
    answer4: "Manila"
};

objQuiz.q4 = {
    question4: "4. What is the capital of Poland?",
    answer1: "Vienna",
    answer2: "Warsaw",
    answer3: "Prague",
    answer4: "Budapest"
};

objQuiz.q5 = {
    question5: "5. What is the capital of Michigan?",
    answer1: "Detroit",
    answer2: "Lansing",
    answer3: "Grand Rapids",
    answer4: "Kalamazoo"
};


//----------- Display questions and answers -----------------
var totalCounter = 0;
var answerCounter = 0;
var questionCounter = 0;

var createQA = function () {
    //question counter
    questionCounter++;

    //The end
    if (questionCounter >= 6) {
        document.getElementById("next").style.display = "none";
        document.getElementById("previous").style.display = "none";
        document.getElementById("score").innerHTML = "Your score is " + totalCounter + " out of 5."
        document.getElementById("meter").setAttribute("value", totalCounter);
        document.getElementById("meter").style.visibility = "visible";
        if (totalCounter > 3) {
            document.getElementById("img").setAttribute("src", "http://media1.giphy.com/media/HscrwGNPHio2A/giphy.gif");
        }
        else {
            document.getElementById("img").setAttribute("src", "http://www.elle.com/cm/elle/images/3r/Cryinggifs_01_1.gif");
        }
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

    //AUTHOR name
    document.getElementById("question" + questionCounter).innerHTML += "<span id='author'></span>"
    document.getElementById("author").innerHTML = "Author: " + objQuiz["Author"];

    //modify question
    document.getElementById("main").innerHTML += "<div id='modifyDiv'></div>";
    document.getElementById("modifyDiv").innerHTML = "<button id='modifyButton'>Modify quesion</button>";
    document.getElementById("modifyButton").setAttribute("onclick", "modifyQuestion();");

    //hide start button
    document.getElementById("start").style.display = "none";

    //show next button
    document.getElementById("next").style.visibility = "visible";

    //show the previous button
    if (questionCounter > 1) {
        document.getElementById("previous").style.visibility = "visible";
    }

    // create answers div
    document.getElementById("main").innerHTML += "<div id='x'></div>";
    document.getElementById("x").setAttribute("class", "answerSet");
    document.getElementById("x").setAttribute("id", "answerSet");

    //create answers
    for (var i = 1; i < 5; i++) {
        answerCounter++;
        document.getElementById("answerSet").innerHTML += "<p id='x'></p>";
        document.getElementById("x").setAttribute("class", "answers");
        document.getElementById("x").setAttribute("onclick", "checkAnswerFunc(this.id);");
        document.getElementById("x").setAttribute("id", ("answer" + answerCounter));
        document.getElementById("answer" + answerCounter).innerHTML = objQuiz["q" + questionCounter]["answer" + i];
        
    }
           
}

//-----------PREVIOUS button --------------------------

var previous = function () {

    //question counter goes down
    questionCounter--;

    //hide it on the first question
    if (questionCounter < 2)
        document.getElementById("previous").style.display = "hidden";
    else
        document.getElementById("previous").style.visibility = "visible";

    //create question div
    document.getElementById("main").innerHTML = "<div id='x'></div>";
    document.getElementById("x").setAttribute("class", "question");
    document.getElementById("x").setAttribute("id", "question" + questionCounter);

    //insert question
    document.getElementById("question" + questionCounter).innerHTML = objQuiz["q" + questionCounter]["question" + questionCounter];

    //AUTHOR name
    document.getElementById("question" + questionCounter).innerHTML += "<span id='author'></span>"
    document.getElementById("author").innerHTML = "Author: " + objQuiz["Author"];

    //modify question
    document.getElementById("main").innerHTML += "<div id='modifyDiv'></div>";
    document.getElementById("modifyDiv").innerHTML = "<button id='modifyButton'>Modify quesion</button>";
    document.getElementById("modifyButton").setAttribute("onclick", "modifyQuestion();");

    // create answers div
    document.getElementById("main").innerHTML += "<div id='x'></div>";
    document.getElementById("x").setAttribute("class", "answerSet");
    document.getElementById("x").setAttribute("id", "answerSet");

    //create answers
    answerCounter -= 8;
    for (var i = 1; i < 5; i++) {
        answerCounter++;
        document.getElementById("answerSet").innerHTML += "<p id='x'></p>";
        document.getElementById("x").setAttribute("class", "answers");
        document.getElementById("x").setAttribute("onclick", "checkAnswerFunc(this.id);");
        document.getElementById("x").setAttribute("id", ("answer" + answerCounter));
        document.getElementById("answer" + answerCounter).innerHTML = objQuiz["q" + questionCounter]["answer" + i];
        
    }
    
}

//-----------MODIFY questions-----------------------

var modifyQuestion = function () {

    //text field for new question is created
    document.getElementById("modifyDiv").innerHTML += "<br />Enter new question: <input type='text' id='newQuestion'>";

    //text field for new Author is created
    document.getElementById("modifyDiv").innerHTML += "<br />Enter your name: <input type='text' id='newAuthor'>";

    //submit button is crated
    document.getElementById("modifyDiv").innerHTML += "<br /><input type='submit' id='submitNewQuestion'>";
    document.getElementById("submitNewQuestion").setAttribute("onclick", "submitQuestion();");
}

//-----------SUBMIT question-------------------------

var submitQuestion = function () {

    //new Question is saved in objects and then displayed
    objQuiz["q" + questionCounter]["question" + questionCounter] = document.getElementById("newQuestion").value;
    document.getElementById("question" + questionCounter).innerHTML = objQuiz["q" + questionCounter]["question" + questionCounter];

    //new Author name is saved in object and then displayed
    objQuiz["Author"] = document.getElementById("newAuthor").value;
    document.getElementById("author").innerHTML = "Author: " + objQuiz["Author"];

    //text fields and submit button disppear
    document.getElementById("modifyDiv").innerHTML = "<button id='modifyButton'>Modify the quesion</button>";
    document.getElementById("modifyButton").setAttribute("onclick", "modifyQuestion();");
}

//----------- Check the answer and keep score -----------------

var pageCheck = [];
var checkAnswerFunc = function (answerId) {
    "use strict";
    
    if (pageCheck.indexOf(questionCounter) === -1) {
        if (answerId === "answer4" ||
            answerId === "answer5" ||
            answerId === "answer11" ||
            answerId === "answer14" ||
            answerId === "answer18") {

            document.getElementById("checkAnswer").innerHTML = "Correct! Awesome!";
                    totalCounter++;
                    pageCheck.push(questionCounter);
                    document.getElementById(answerId).setAttribute("onclick", ""); //still need this?
        } else {
            document.getElementById("checkAnswer").innerHTML = "Wrong!! HA!";
                    document.getElementById("checkAnswer").style.color = "red";
                    document.getElementById(answerId).setAttribute("onclick", ""); //still need this?
                    pageCheck.push(questionCounter);
        }
        
    }
    else { alert("You have already answered. Click the Next button for the next question");}
}