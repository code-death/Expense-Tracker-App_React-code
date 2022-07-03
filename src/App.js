import Budget from './Components/Budget.js'
import Remaining from './Components/Remaining.js'
import Spent from './Components/Spent.js'
import ExpenseList from './Components/ExpenseList'
import AddExpenseForm from './Components/AddExpenseForm.js'
import { AppProvider } from './Context/AppContext'

function App() {
  return (
    <AppProvider>
      <div className='container-fluid'>
        <h1 className='mt-4 mb-4'>My Budget Planner</h1>
        <div className='row mt-4'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
        </div>
        <h3 className='mt-4 mb-4'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-5 mb-3'>Add Expense</h3>
        <div className='mt-4'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default App
