"use strict";

//=======PROTOTYPE============

var protoQuestion = {
    "Author": "Wasim",
    "quizName": "CoderPeerLocation"
};

//=======CONSTRUCTOR=============

var Question = function (questionText, ansOne, ansTwo, ansThree, ansFour) {

    var question = questionText;
    var ans1 = ansOne;
    var ans2 = ansTwo;
    var ans3 = ansThree;
    var ans4 = ansFour;

    this["getQuestion"] = function () {
        return question;
    };
    this["getAns1"] = function () {
        return ans1;
    };
    this["getAns2"] = function () {
        return ans2;
    };
    this["getAns3"] = function () {
        return ans3;
    };
    this["getAns4"] = function () {
        return ans4;
    };
};

Question.prototype = protoQuestion;

    // Array with 5 question objects
    
    var questionArray = [
    new Question("1. What is the capital of Kenya?", "Chicago", "Adis Ababa", "Jakarta", "Nairobi"),
    new Question("2. What is the capital of Finland?", "Helsinki", "CopenHagen", "Oslo", "Stockholm"),
    new Question("3. What is the capital of Malaysia?", "Dhaka", "Khatmandu", "Kuala Lampur", "Manila"),
    new Question("4. What is the capital of Poland?", "Vienna", "Warsaw", "Prague", "Budapest"),
    new Question("5. What is the capital of Michigan?", "Detroit", "Lansing", "Grand Rapids", "Kalamazoo")
    ];
    
        

    //------===========----- DIPLAY questions and answers --------==================---------
    
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

        // startscreen be gone
        if (document.getElementById("startscreen")) {
            var div = document.getElementById("startscreen");
            div.parentElement.removeChild(div);
        }

        // create nav bar
        document.getElementById("nav").innerHTML = "<li onclick='signup();' class='button'>Sign up</li>";
        document.getElementById("nav").innerHTML += "<li onclick='signin();' class='button'>Sign in</li>";
        
        //create question div
        document.getElementById("main").innerHTML = "<div id='x'></div>";
        document.getElementById("x").setAttribute("class", "question");
        document.getElementById("x").setAttribute("id", "question" + questionCounter);
            
        //insert question1
        document.getElementById("question" + questionCounter).innerHTML = questionArray[questionCounter-1]["getQuestion"]();

        //AUTHOR name
        document.getElementById("question" + questionCounter).innerHTML += "<span id='author'></span>"
        document.getElementById("author").innerHTML = "Submitted by: " + questionArray[questionCounter-1]["Author"];

        // modify question button
        //document.getElementById("signin").style.display = "none";
                
        // hide the start button
        //document.getElementById("start").style.display = "none";

        //// hide the sign up text
        //if (!username) {
        //    document.getElementById("firstPageText1").style.display = "none";
        //    document.getElementById("firstPageText2").style.display = "none";
        //    document.getElementById("firstPageText3").style.display = "none";
        //}
        

        //// Delete the sign up botton
        //document.getElementById("signup").style.display = "none";

        // show the next button
        document.getElementById("next").style.visibility = "visible";

        // show the previous button
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
            document.getElementById("answer" + answerCounter).innerHTML = questionArray[questionCounter-1]["getAns" + i]();
        
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
        document.getElementById("question" + questionCounter).innerHTML = questionArray[questionCounter - 1]["getQuestion"]();

        //AUTHOR name
        document.getElementById("question" + questionCounter).innerHTML += "<span id='author'></span>"
        document.getElementById("author").innerHTML = "Author: " + questionArray[questionCounter - 1]["Author"];

        ////modify question
        //document.getElementById("main").innerHTML += "<div id='modifyDiv'></div>";
        //document.getElementById("modifyDiv").innerHTML = "<button id='modifyButton'>Modify quesion</button>";
        //document.getElementById("modifyButton").setAttribute("onclick", "modifyQuestion();");

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
            document.getElementById("answer" + answerCounter).innerHTML = questionArray[questionCounter - 1]["getAns" + i]();
        }
    
    }

    ////-----------MODIFY questions-----------------------

    //var modifyQuestion = function () {

    //    //text field for new question is created
    //    document.getElementById("modifyDiv").innerHTML += "<br />Enter new question: <input type='text' id='newQuestion'>";

    //    //text field for new Author is created
    //    document.getElementById("modifyDiv").innerHTML += "<br />Enter your name: <input type='text' id='newAuthor'>";

    //    //submit button is crated
    //    document.getElementById("modifyDiv").innerHTML += "<br /><input type='submit' id='submitNewQuestion'>";
    //    document.getElementById("submitNewQuestion").setAttribute("onclick", "submitQuestion();");
    //}

    ////-----------SUBMIT question-------------------------

    //var submitQuestion = function () {

    //    //new Question is saved in objects and then displayed
    //    var newQuestion = document.getElementById('newQuestion').value;
    //    questionArray[questionCounter - 1]["getQuestion"](newQuestion, "a", "b", "c", "d");
    //    document.getElementById("question" + questionCounter).innerHTML = questionArray[questionCounter - 1]["getQuestion"]();

    //    ////new Author name is saved in object and then displayed
    //    //questionArray[questionCounter - 1]["Author"] = document.getElementById("newAuthor").value;
    //    //document.getElementById("author").innerHTML = "Author: " + questionArray[questionCounter - 1]["Author"];

    //    //text fields and submit button disppear
    //    document.getElementById("modifyDiv").innerHTML = "<button id='modifyButton'>Modify the quesion</button>";
    //    document.getElementById("modifyButton").setAttribute("onclick", "modifyQuestion();");
    //}

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




//-----------------SIGN UP FORM-------signup()---------------------------------

    var signup = function () {
        //turn the sign up button to gold
        document.getElementById("signup").style.background = "gold";
        //
        document.getElementById("startscreen").innerHTML += "<form id='signupform'><form>";
        // display username field
        document.getElementById("signupform").innerHTML += "<br />Enter username " + "<input type='text' id='username'><br /><br />";
        // display password field
        document.getElementById("signupform").innerHTML += "Enter password " + "<input type='password' id='password'><br /><br />";
        // display submit button => register()
        document.getElementById("signupform").innerHTML += "<input type='submit' onclick='register()' class='button'>";
        // display cancel button
        document.getElementById("signupform").innerHTML += "<button id='cancelButton' class='button'>Cancel</button>";
        // hide all the text
        document.getElementById("firstPageText1").style.display = "none";
        document.getElementById("firstPageText2").style.display = "none";
        document.getElementById("firstPageText3").style.display = "none";
        // hide start button
        document.getElementById("start").style.display = "none";
        // hide sign in button
        document.getElementById("signin").style.display = "none";
    }

//-----------------REGISTER FORM-------register()---------------------------------

    var register = function () {
        //read username
        var username = document.getElementById("username").value;
        //read password
        var password = document.getElementById("password").value;
        // save username to local storage
        localStorage.setItem("username", username);
        // save password to local storage
        localStorage.setItem("password", password);
        document.getElementById("startscreen").setAttribute("align", "center");
        document.getElementById("startscreen").style.margin = "20% auto auto auto";
        document.getElementById("startscreen").innerHTML = "<h1>Thank you for signing up.</h1><p>Click the button below to sign in.</p><br /><br />";
        // display SIGN IN button => signin()
        document.getElementById("startscreen").innerHTML += "<button id='sign in' onclick='signin()' class='button'>Sign in</button>";
    }

//-----------------SIGN IN ------signin()----------------------------------

    var signin = function () {
        document.getElementById("startscreen").setAttribute("align", "center");
        document.getElementById("startscreen").style.margin = "20% auto auto auto";
        document.getElementById("startscreen").setAttribute("border-color", "white");
        document.getElementById("startscreen").setAttribute("border-radius", "10px");

        // display username field
        document.getElementById("startscreen").innerHTML = "<br />Enter username " + "<input type='text' id='username'><br /><br />";
        // display password field
        document.getElementById("startscreen").innerHTML += "Enter password " + "<input type='password' id='password'><br /><br />";
        // display SIGN IN button => verify()
        document.getElementById("startscreen").innerHTML += "<button id='sign in' onclick='verify()' class='button'>Sign in</button>";
        
    }

    var verify = function () {
        // read username and password entered and save them as variables
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // check to see if username and password are correct
        if (localStorage.getItem("username") === username &&
            localStorage.getItem("password") === password) {
            document.getElementById("startscreen").innerHTML = "<h1>Thank you for signing in.</h1><p>Click the button below to start the quiz.</p><br /><br />";
            document.getElementById("startscreen").innerHTML += "<div id='start' onclick='createQA();' class='button'>Start</div>";
        } else {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("startscreen").innerHTML += "<br /><p id='fail' style='color: red'></p><p id='fail2'></p>";
            document.getElementById("fail").innerHTML = "Login failed.";
            document.getElementById("fail2").innerHTML = "Please try again.";
        }
        
    }