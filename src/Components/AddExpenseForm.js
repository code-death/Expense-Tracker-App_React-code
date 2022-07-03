import { useState, useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = props => {
  const { dispatch } = useContext(AppContext)
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    const expense = {
      name: name,
      cost: parseInt(cost),
      id: uuidv4(),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='row'>
        <div className='col-sm mt-3'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            required
            className='form-control mt-2'
            id='name'
            onChange={event => {
              setName(event.target.value)
            }}
            value={name}
          />
        </div>
        <div className='col-sm mt-3'>
          <label htmlFor='Cost'>Cost</label>
          <input
            value={cost}
            type='number'
            min='0'
            required
            className='form-control mt-2'
            id='Cost'
            onChange={event => {
              setCost(event.target.value)
            }}
          />
        </div>
        <div className='col-sm mt-3'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddExpenseForm
