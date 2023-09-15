import './screens.css'
import he from 'he';

const Result = ({quizData, selectedAns}) => {

    window.scrollTo(0, 0)

    const score = quizData.reduce((acc, quiz, index) => {
        const decodedAnswer = he.decode(quiz.correct_answer);
        const selectedAnswer = he.decode(selectedAns[index + 1]);
        return acc + (decodedAnswer === selectedAnswer ? 1 : 0);
    }, 0);

    const refresh = () => {
        window.location.reload();
    }

    const resultElements = quizData.map((quiz, index) => {

        const decodedQuestion = he.decode(quiz.question)
        const decodedOptions = quiz.options.map((option) => he.decode(option))
        const answerIndex = decodedOptions.indexOf(he.decode(quiz.correct_answer))
        const selectedAnsIndex = decodedOptions.indexOf(
            he.decode(selectedAns[index + 1])
        )

        return (
            <main key = {decodedQuestion}>
                <div className='question--cont'>
                <p className='quiz--ques'>{`${index+1}. ${decodedQuestion}`}</p>
                <div className='quiz--answers'>
                    {decodedOptions.map((option, optionIndex) => (
                        <button
                            key={optionIndex}
                            className={`ans ${
                                optionIndex === answerIndex ? 'correct--ans' : ''
                            } ${
                            optionIndex === selectedAnsIndex && optionIndex !== answerIndex
                                ? 'wrong--ans'
                                : ''
                            }`}
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
            <p className='quiz--heading'>TriviaTrek Answers: Test Your Knowledge!</p>
            {resultElements}
            <div className='result--cont'>
                <p className='result'>{`You gave ${score}/${quizData.length} answers correctly !!`}</p>
                <button 
                    className='btn play--again'
                    onClick={refresh}
                >
                    Play Again
                </button>
            </div>
        </div>
    )
}

export default Result