import { React, useState, useEffect } from 'react';
import he from 'he';
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Result from './screens/Result'

function App() {

  const [display, setDisplay] = useState('home')
  const [quizData, setQuizData] = useState([])
  const [selectedAns, setSelectedAns] = useState({})

  const fetchData = async () => {
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
      const fetchedData = await res.json()

      const { results } = fetchedData

      const data = results.map(item => { 
          let options = item.incorrect_answers.slice(0, 3);
          const randomIndex = Math.floor(Math.random()*4)

          options.splice(randomIndex, 0, item.correct_answer)

          return ({
              ...item,
              options: options
          }) 
      })

      setQuizData(data)
  } catch (error) {
    console.error('Error fetching data:', error);
    }
  }

  const displayController = () => {
    setDisplay(prevDisplay => prevDisplay === 'home' ? 'quiz' : 'result')
  }

  const setAns = (event, index) => {
    setSelectedAns(prevAns => ({
        ...prevAns,
        [index+1]: he.decode(event.target.innerHTML)
    }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  let content
  if (display === "home") { 
      content = <Home 
        handleDisplay = {displayController}
      />
  } else if (display === "quiz" ){
    content = <Quiz 
        key = {quizData}
        quizData = {quizData}
        handleDisplay = {displayController}
        handleAns = {setAns}
        selectedAns = {selectedAns}
      /> 
  } else {
    content = <Result 
      quizData = {quizData}
      selectedAns = {selectedAns}
    />
  }

  return (
    <div className='App'>{content}</div>
  )
}

export default App;
