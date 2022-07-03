import ExpenseItem from './ExpenseItem.js'
import { AppContext } from '../Context/AppContext.js'
import { useContext } from 'react'

const ExpenseList = () => {
  const { expenses } = useContext(AppContext)
  return (
    <ul className='list-group'>
      {expenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        )
      })}
    </ul>
  )
}

export default ExpenseList
