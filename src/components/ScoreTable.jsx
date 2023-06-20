import { useDispatch, useSelector } from 'react-redux'
import { startGame } from '../redux/frameworksSlice'

const ScoreTable = () => {
    const {score, activeFrameworks} = useSelector(state => state.frameworksSlice)

    const dispatch = useDispatch()
    const startNewGame = () => {
        dispatch(startGame())
    }
    return (
        <div className='scoretable'>
            <h3>Score: {score}</h3>
            <button onClick={startNewGame} disabled={activeFrameworks.length === 2}>Start A New Game</button>
        </div>
    )
}

export default ScoreTable