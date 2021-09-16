const questionType = ['capital', 'flag'];

const getRandom = (max) => {
    return Math.floor(Math.random() * max);
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
        "question": (qType == 'capital') ? 'Que capital es?' : 'Que bandera es esta?'
    }
}