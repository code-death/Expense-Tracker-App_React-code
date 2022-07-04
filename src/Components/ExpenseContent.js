import ExpenseList from './ExpenseList'
import { useState } from 'react'

const ExpenseContent = props => {
  const [filter, setFilter] = useState('')
  const handleChange = e => {
    setFilter(e.target.value)
  }

  return (
    <div className='mx-5'>
      <h3 className='mt-4 mb-4'>Expenses</h3>
      <input
        className='form-control'
        onChange={handleChange}
        type='text'
        placeholder='Search expense'
        value={filter}
      ></input>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList filter={filter} />
        </div>
      </div>
    </div>
  )
}

export default ExpenseContent
