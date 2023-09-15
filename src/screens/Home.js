import './screens.css'

const Home = ({handleDisplay}) => {

    return (
        <div className='main--container'>
            <div className='app--heading'>
                <span className='fluedText'>T</span>
                <span className='fluedText soft--pink'>r</span>
                <span className='fluedText bright--yellow'>i</span>
                <span className='fluedText subtle--green'>v</span>
                <span className='fluedText deep--purple'>i</span>
                <span className='fluedText vibrant--orange'>a</span>
                <span className='fluedText muted--teal'>T</span>
                <span className='fluedText warm--red'>r</span>
                <span className='fluedText goldenrod'>e</span>
                <span className='fluedText lavender'>k</span>
            </div>
            <p className='punchline'>
                Unlock Your Mind, One Question at a Time: Quiz your Way to Wisdom!
            </p>
            <button className='btn start--btn'
                onClick={handleDisplay}
            >
                Start Quiz
            </button>
        </div>
    )
}

export default Home 