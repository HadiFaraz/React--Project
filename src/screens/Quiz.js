import he from 'he';
import './screens.css'

const Quiz = ({quizData, handleDisplay, handleAns, selectedAns}) => {

    const quizElements = quizData.map((quiz, index) => {

        const decodedQuestion = he.decode(quiz.question)
        const decodedOptions = quiz.options.map((option) => he.decode(option))
        const answer = decodedOptions.indexOf(selectedAns[index + 1])

        return (
            <main key = {decodedQuestion}>
                <div className='question--cont'>
                    <p className='quiz--ques'>{`${index+1}. ${decodedQuestion}`}</p>
                    <div className='quiz--answers'>
                        {decodedOptions.map((option, optionIndex) => (
                            <button
                                key = {optionIndex}
                                className = {`
                                ans 
                                ${optionIndex === answer? 'selected--ans' : ''}
                                `} 
                                onClick={(event) => handleAns(event, index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='hz--line'></div>
            </main>
        )
    })

    return (
        <div className='main--quiz--cont'>
            <p className='quiz--heading'>Embark on the TriviaTrek Challenge!</p>
            {quizElements}
            <button
                className='btn check--ans'
                onClick={ handleDisplay }
            >
                Check Answers
            </button>
        </div>
    )
}

export default Quiz
