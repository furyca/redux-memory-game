import { useDispatch, useSelector } from "react-redux"
import { pickCard, checkCards } from '../redux/frameworksSlice'
import { useEffect, useState } from "react"

const Card = ( {name, id, src }) => {
  const activeFrameworks = useSelector(state => state.frameworksSlice.activeFrameworks)
  const completedFrameworks = useSelector(state => state.frameworksSlice.completedFrameworks)
  const [closed, setClosed] = useState(true);

  const dispatch = useDispatch()

  const handleClick = () => {
    if (activeFrameworks.length === 0) {
      dispatch(pickCard({
        name,
        id,
        src,
      }))
    }
    else {
      dispatch(pickCard({
        name,
        id,
        src,
      }))
      setTimeout(() => {
        dispatch(checkCards({
          name,
          id,
          src,
        }))
      }, 750);
      
    }
  }

  useEffect(() => {
    setClosed(!completedFrameworks.find(framework => framework.id === id) 
    && !activeFrameworks.find(framework => framework.id === id))
  })
  
  return (
    <div className='card' disabled={activeFrameworks.length === 2} onClick={handleClick}>
        {closed ? <div>?</div> : <img src={src} alt="" />}
    </div>
  )
}

export default Card