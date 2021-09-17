import React from "react";
import { getAnswers, checkAnswer } from "../helpers/quizMaker";

function QuizComponent(props) {
    console.log('quiz', props);
    const quiz = props.quiz;
    const chars = ['A', 'B', 'C', 'D'];
    const addPoint = props.addPoint;
    let answered = false;

    let answers = getAnswers(quiz);

    //TODO - Epic bug, no le gustan los paises con parentesis y apostrofes, limpiar strings
    function manageAnswer(answer){
        if(!answered){
            let correct = checkAnswer(answer, quiz);
            let answerDOM = '.'+answer.replace(/\s/g, "").toLowerCase();
            let correctDOM = '.'+quiz.target.name.replace(/\s/g, "").toLowerCase();
    
            if(correct == true){
                document.querySelector(answerDOM).classList.add('correct');
                addPoint();
            }else{
                document.querySelector(answerDOM).classList.add('fail');
                document.querySelector(correctDOM).classList.add('correct');
            }

            answered = true;
        }
    }

    return(
        <div id="quiz-box">
            {quiz.type == 'flag' && 
                <img className="flag" src={quiz.target.flag} alt="" />
            }
            <h2>{quiz.question}</h2>
            <div className="answers-list">
                {answers.map((answer, i) => (
                    <button key={answer} className={answer.replace(/\s/g, "").toLowerCase() + ' answer'}
                        onClick={() => manageAnswer(answer)}>
                        <span>{chars[i]}</span>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuizComponent;