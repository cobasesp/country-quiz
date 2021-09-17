import React from "react";
import { getAnswers } from "../helpers/quizMaker";

function QuizComponent(q) {
    console.log('quiz', q);
    const quiz = q.quiz;

    let answers = getAnswers(quiz);

    return(
        <div id="quiz-box">
            <h2>{quiz.question}</h2>
            {quiz.type == 'flag' && 
                <img className="flag" src={quiz.target.flag} alt="" />
            }
            <div className="answers">
                {answers.map(answer => (
                    <button key={answers}>{answer}</button>
                ))}
            </div>
        </div>
    );
}

export default QuizComponent;