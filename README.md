# TriviaGame
TriviaGame_BootCamp_Week5_HW_Advanced Assignment(Timed Questions)

## Rules of the game
>Answer the question before time runs out. If the incorrect answer is chosen, the quesation will be counted as wrong and the correct answer will be show. If the time runs out the question will be counted as unanswered. A few moments later, the next question will appear. This will continue until all questions are completed or timed-out and your final score of correct, incorrect, and unanswered questions will be shown.

### Assignment Instructions -Option Two: Advanced Assignment (Timed Questions)
* You'll create a trivia game that shows only one question until the player answers it or their time runs out.
* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
* The scenario is similar for wrong answers and time-outs.
    * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
    * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

#### Notes
* I noticed scope applies to DOM objects as well, similarily as with other variables. For instance, an event on an option added within a function could only be accessed within that same function and does not have a conventional global scope. i.e. attempts to listen to an event on an option id outside of the function scope does not yield an error, so javascript must know it exists, but that event listener remains nonfunctional; almost as if there is a partial global scope maybe? additional research and testing required. 