import './App.css';
import { useEffect, useState } from 'react';
import getRandomQuiz from './helpers/quizMaker';

import QuizComponent from './components/quizComponent';

function App() {

  const [countries, setCountries] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [points, setPoints] = useState(0);

  // Al inicio cargo los datos de los paises desde la API
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let countryData = [];

      // Prepare an array just with the needed data
      data.forEach(country => {
        let c = {
          "name": country.name,
          "capital": country.capital,
          "flag": country.flag
        }

        countryData.push(c);
      });

      // Put the new array in the status
      setCountries(countryData);
    })
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if(countries.length > 0){
      startQuiz();
    }
  }, [countries])

  // Clean all and start a new game
  function startQuiz(){
    // limpiar repuestas, etc

    let quiz = getRandomQuiz(countries);  
    setCurrentQuiz(quiz);
  }

  const addPoint = () => {
    let p = points + 1;
    setPoints(p);
  }

  return (
    <div>
      <div className="container">
        <h1 className="title">
            Country quiz
            <img src={process.env.PUBLIC_URL + '/undraw_adventure.svg'} alt="" />
        </h1>
        {currentQuiz != null &&
          <QuizComponent
            quiz={currentQuiz}
            addPoint={addPoint}
          ></QuizComponent>
        }
        {/* Poner aqui otro componente que se vea si el resultado no es null y poner null el quiz */}
      </div>
    </div>
  );
}

export default App;
