$(document).ready();

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
    start: false,
    nextQ: false

}


$("#start").on("click", function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("wrapper2").style.display = "block";
    //call function start clock
    //call function display question

});

//diaplay question function
    //if nxtQ is true display next function

//start clock function
    //if time == 0 thn nxtQ = true


