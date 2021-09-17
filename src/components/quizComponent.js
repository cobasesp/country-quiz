import React from "react";
import { getAnswers } from "../helpers/quizMaker";

function QuizComponent(q) {
    console.log('quiz', q);
    const quiz = q.quiz;
    const chars = ['A', 'B', 'C', 'D'];

    let answers = getAnswers(quiz);

    return(
        <div id="quiz-box">
            {quiz.type == 'flag' && 
                <img className="flag" src={quiz.target.flag} alt="" />
            }
            <h2>{quiz.question}</h2>
            <div className="answers-list">
                {answers.map((answer, i) => (
                    <button key={answers} className="answer">
                        <span>{chars[i]}</span>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuizComponent;