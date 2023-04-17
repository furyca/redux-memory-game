import { useDispatch, useSelector } from 'react-redux'
import { startGame } from '../redux/frameworksSlice'

const ScoreTable = () => {
    const score = useSelector(state => state.frameworksSlice.score)

    const dispatch = useDispatch()
    const startNewGame = () => {
        dispatch(startGame())
    }
    return (
        <div className='scoretable'>
            <h3>Score: {score}</h3>
            <button onClick={startNewGame}>Start A New Game</button>
        </div>
    )
}

export default ScoreTable