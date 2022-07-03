import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'

const Budget = () => {
  const { budget } = useContext(AppContext)

  return (
    <div className='alert alert-secondary'>
      <span>Budget : ${budget}</span>
    </div>
  )
}

export default Budget
