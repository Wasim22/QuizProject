"use strict";

// prototype object
var protoObj = {
    Author: "Wasim"
};

// object containing 5 other objects
var objQuiz = {};
objQuiz = Object.create(protoObj);
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
var questionCounter = 0;

var createQA = function (id) {
    //question counter
    questionCounter++;

    //reset the image
    document.getElementById("img").setAttribute("src", "");

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
    document.getElementById("modifyDiv").innerHTML = "<button id='modifyButton'>Modify the quesion</button>";
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
        document.getElementById("answerSet").innerHTML += "<p id='x'></p>";
        document.getElementById("x").setAttribute("class", "answers");
        document.getElementById("x").setAttribute("onclick", "checkAnswerFunc(this.id);");
        document.getElementById("x").setAttribute("id", ("answer" + answerCounter));
        document.getElementById("answer" + answerCounter).innerHTML = objQuiz["q" + questionCounter]["answer" + i];
        answerCounter++;
    }
           
}

//-----------PREVIOUS button --------------------------

var previous = function () {

    //question counter goes down
    questionCounter--;

    //create question div
    document.getElementById("main").innerHTML = "<div id='x'></div>";
    document.getElementById("x").setAttribute("class", "question");
    document.getElementById("x").setAttribute("id", "question" + questionCounter);

    //insert question
    document.getElementById("question" + questionCounter).innerHTML = objQuiz["q" + questionCounter]["question" + questionCounter];

    //create answers
    answerCounter -= 4;
    for (var i = 1; i < 5; i++) {
        document.getElementById("question" + questionCounter).innerHTML += "<p id='x'></p>";
        document.getElementById("x").setAttribute("class", "answers");
        document.getElementById("x").setAttribute("onclick", "checkAnswerFunc(this.id);");
        document.getElementById("x").setAttribute("id", ("answer" + answerCounter));
        document.getElementById("question" + questionCounter).innerHTML = objQuiz["q" + questionCounter]["question" + questionCounter];
        answerCounter++;
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

    //new Quesiton is saved in objects and then displayed
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

var clickCounter = 1;
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