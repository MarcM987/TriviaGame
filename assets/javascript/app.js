//
$(document).ready();

//
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
    start: false, //might not be needed
    nextQ: false,
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


//why did this not work?
// for(let i=0; i<=4; ++i){
//     $("#option" + i).on("click", function(){
//         game.answer =  game.questions[game.questionNum-1].options[i];
//         console.log(i);
//         responseDisplay();
//     });
// }

//
function nxtQuestion(){
    $("#question").text(game.questions[game.questionNum].question);

    for(let i=0; i < game.questions[game.questionNum].options.length; ++i){
        var option = $("<div>hello</div>").attr('id', 'option' + i).attr('class', 'options h5 font-weight-bold');
        option.text(game.questions[game.questionNum].options[i]);
        $("#question").append(option);

        //this needs to be here since outside of this function, the created id's can't use onclick events
        $("#option" + i).on("click", function(){
            game.answer =  game.questions[game.questionNum].options[i];
            console.log(i);
            responseDisplay();
        });
    }

    ++game.questionNum;
}

var intervalId;
//
function runClock(){    
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        //this was a fix, but may have been because i did not refresh page
        // let time = game.time;
        // --time;
        // game.time = time;

        --game.time;
        
        $("#time").text(game.time);

        if(game.time == 0){
            clearInterval(intervalId);
            game.time = 30;
            game.answer = "timeout";
            responseDisplay();

        }

        if(game.nextQ){
            // nxtQuestion();
            
        }

    }, 1000);
    
}

//
function responseDisplay(){
    let response = "";
    if(game.answer == game.questions[game.questionNum-1].answer){
        response = "Correct!!"
    }else if(game.answer == "timeout"){
        response = "Time Out!!"
    }else{
        response = "Incorrect!!"
    }
    $("#question").text(response + " The answer is: " + game.questions[game.questionNum-1].answer)
    
    game.answer = "";

    setTimeout(() => {
        runClock();
        nxtQuestion();
    }, 5000)
}