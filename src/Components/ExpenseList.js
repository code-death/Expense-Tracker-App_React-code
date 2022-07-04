import ExpenseItem from './ExpenseItem.js'
import { AppContext } from '../Context/AppContext.js'
import { useContext } from 'react'

const ExpenseList = props => {
  const { expenses } = useContext(AppContext)
  const filteredExpenses = expenses.filter(expense => {
    return expense.name.toLowerCase().includes(props.filter)
  })
  return (
    <ul className='list-group'>
      {filteredExpenses.map(expense => {
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
