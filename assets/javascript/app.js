//waits for the document to be ready before executing js
$(document).ready();

//object for the game's questions/answers and tracking
var game = {
    theme: "The Matrix",
    questions: [question1={
        question: "Who is the chosen one?",
        options: ["Neo", "Morpheus", "Trinity", "Agent Smith"],
        answer: "Neo"

    }, question2={
        question: "Which pill will set you free?",
        options: ["The Blue Pill", "The Yellow Pill", "The Red Pill", "The Black Pill"],
        answer: "The Red Pill"

    }, question3={
        question: "Who wrote the matrix?",
        options: ["J.K. Rowling", "Tolkein", "The Wachowskis", "C.S Lewis"],
        answer: "The Wachowskis"

    }, question4={
        question: "Which philosphical work inspired the matrix?",
        options: ["The Republic", "De Officiis", "Simulacra and Simulation", "Nihil est verum"],
        answer: "Simulacra and Simulation"

    }, question5={
        question: "Which one of these characters are NOT in the matrix?",
        options: ["The Merovingian", "Cypher", "Apoc", "Avignon"],
        answer: "Avignon"

    }],
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    time: 30,
    nextQ: true,
    questionNum: 0,
    choice: ""

}

//
$("#start").on("click", function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("wrapper2").style.display = "block";
    $("#time").text(game.time);
    nxtQuestion();
    runClock();

});

//adds the question and all on click events
function nxtQuestion(){
    $("#question").text(game.questions[game.questionNum].question);

    for(let i=0; i < game.questions[game.questionNum].options.length; ++i){
        var option = $("<div>hello</div>").attr('id', 'option' + i).attr('class', 'options h5 font-weight-bold');
        option.text(game.questions[game.questionNum].options[i]);
        $("#question").append(option);
        //note removing previously created options is unnecessary, 
            //they are simply overwritten due to scope

        //due to scope, the created id's can't use onclick events outside this loop/function
        $("#option" + i).on("click", function(){
            game.answer =  game.questions[game.questionNum-1].options[i];
            
            //clock resets
            game.time = 30;
            clearInterval(intervalId);
            
            responseDisplay();
        });

        //
        $("#option" + i).hover(function(){
            document.getElementById("option" + i ).style.border = "2px solid black";
            document.getElementById("option" + i ).style.backgroundColor = "pink";
        },function(){
            document.getElementById("option" + i ).style.border = "";
            document.getElementById("option" + i ).style.backgroundColor = "";
        });
    }

    ++game.questionNum;
}


//runs the clock for the game, calling response or end of game functions appropriately
var intervalId;
function runClock(){    
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        --game.time;
        
        $("#time").text(game.time);

        if(game.time == 0){
            clearInterval(intervalId);
            game.time = 30;
            game.answer = "timeout";
            responseDisplay();

        }

    }, 1000);
    
}

//displays the response to the given question
function responseDisplay(){
    let response = "";
    if(game.answer == game.questions[game.questionNum-1].answer){
        response = "Correct!!"
        ++game.correct;
    }else if(game.answer == "timeout"){
        response = "Time Out!!"
        ++game.unanswered;
    }else{
        ++game.incorrect;
        response = "Incorrect!!"
    }
    $("#question").text(response + " The answer is: " + game.questions[game.questionNum-1].answer)
    game.answer = "";

    //add response images/gifs

    //checks to see if there are any questions left
    if(game.questions.length <= game.questionNum){
        game.nextQ = false;
    }

    //
    setTimeout(() => {
        if(!game.nextQ){
            //show end page  
            $("#question").text("All done, heres how you did!");
            let answers = [
                $("<div>Correct Answers: </div>").append(game.correct),
                $("<div>Incorrect Answers: </div>").append(game.incorrect),
                $("<div>Unanswered: </div>").append(game.unanswered)];
            $("#question").append(answers);

            //start over button add, could be combined for shorter code,
                //but would create an unclear flow
            $("#question").append($("<div>Start Over?</div>").attr('id', 'startO').attr('class', 'h3'));
            $("#startO").on("click", function(){
                //resets to game's default environment
                game.correct = 0;
                game.incorrect = 0;
                game.unanswered = 0;
                game.nextQ = true;
                game.questionNum = 0;
                document.getElementById("start").style.display = "block";
                document.getElementById("wrapper2").style.display = "none";

            });

        }else{
            runClock();
            nxtQuestion();
        }

    }, 5000) 
}
