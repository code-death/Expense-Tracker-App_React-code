import { AppContext } from '../Context/AppContext'
import { useContext, useState } from 'react'

const Budget = () => {
  const [edit, setEdit] = useState(false)
  const { budget, dispatch } = useContext(AppContext)
  const [newBudget, setNewBudget] = useState(budget)

  const clickHandler = () => {
    setEdit(true)
  }
  const submitHandler = e => {
    e.preventDefault()
    dispatch({
      type: 'BUDGET_CHANGE',
      payload: newBudget,
    })
    setEdit(false)
  }
  const changeHandler = e => {
    setNewBudget(e.target.value)
  }

  return (
    <div className='alert alert-secondary col-sm pb-2'>
      <form onSubmit={submitHandler}>
        {edit ? (
          <div>
            <label htmlFor='budget'>Budget: </label>
            <input
              onChange={changeHandler}
              type='text'
              id='budget'
              value={newBudget}
              className='col-4'
            />
          </div>
        ) : (
          <span>Budget : ${budget}</span>
        )}
        {edit ? (
          <button type='submit' className='btn btn-sm btn-primary ms-3 px-3'>
            Ok
          </button>
        ) : (
          <div
            onClick={clickHandler}
            type='button'
            className='btn btn-primary btn-sm ms-3 px-3 budget-button'
          >
            Edit
          </div>
        )}
      </form>
    </div>
  )
}

export default Budget
