const questionType = ['capital', 'flag'];

const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

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

export function getAnswers(quiz){
    let answers = [];
    quiz.errors.map(e => {
        answers.push(e.name);
    });
    answers.push(quiz.target.name);

    answers = shuffle(answers);

    return answers;
}

export default function getRandomQuiz(countries) {
    let random = getRandom(countries.length);
    let qType = questionType[((random % 2 == 0) ? 0 : 1)];
    let target = countries[random];
    let errors = [];

    for (let i = 0; i < 3; i++) {
        let ran = getRandom(countries.length);
        errors.push(countries[ran]);
    }

    return {
        "target": target,
        "errors": errors,
        "type": qType,
        "question": (qType == 'capital') ? `${target.capital} is the capital of...` : 'Which country has this flag?'
    }
}