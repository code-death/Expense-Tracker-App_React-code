import AddExpenseForm from './AddExpenseForm'

const AddExpense = props => {
  return (
    <div className='ms-5'>
      <h3 className='mt-5 mb-3'>Add Expense</h3>
      <div className='mt-4'>
        <div className='col-md'>
          <AddExpenseForm />
        </div>
      </div>
    </div>
  )
}

export default AddExpense
