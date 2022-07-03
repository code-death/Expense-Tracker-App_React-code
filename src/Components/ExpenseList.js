import ExpenseItem from './ExpenseItem.js'

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Holiday', cost: 300 },
    { id: 3, name: 'Food', cost: 600 },
    { id: 4, name: 'Transportation', cost: 80 },
    { id: 5, name: 'Fuel', cost: 50 },
    { id: 6, name: 'Child Care', cost: 500 },
  ]

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
