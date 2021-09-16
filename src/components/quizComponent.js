import React from "react";

function QuizComponent(q) {
    console.log('quiz', q);
    const quiz = q.quiz;

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    
    }

    let answers = [];
    quiz.errors.map(e => {
        if(quiz.type == 'capital'){
            answers.push(e.capital);
        }else{
            answers.push(e.name);
        }
    });
    answers.push(quiz.target[((quiz.type == 'capital') ? 'capital' : 'name')]);

    answers = shuffle(answers);

    return(
        <div id="quiz-box">
            <h2>{quiz.question}</h2>
            <div className="answers">
                {answers.map(answer => (
                    <button key={answers}>{answer}</button>
                ))}
            </div>
        </div>
    );
}

export default QuizComponent;