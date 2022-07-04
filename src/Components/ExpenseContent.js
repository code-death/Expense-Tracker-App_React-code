import ExpenseList from './ExpenseList'

const ExpenseContent = props => {
  return (
    <div className='mx-5'>
      <h3 className='mt-4 mb-4'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
    </div>
  )
}

export default ExpenseContent
