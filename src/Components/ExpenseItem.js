import { TiDelete } from 'react-icons/ti'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const ExpenseItem = props => {
  const { dispatch } = useContext(AppContext)
  const handleClick = () => {
    dispatch({ type: 'DELETE_EXPENSE', payload: props.id })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span className='badge bg-primary rounded-pill me-3'>
          ${props.cost}
        </span>
        <TiDelete
          style={{ cursor: 'pointer' }}
          size='1.5em'
          onClick={handleClick}
        />
      </div>
    </li>
  )
}

export default ExpenseItem
