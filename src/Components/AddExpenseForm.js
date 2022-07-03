const AddExpenseForm = props => {
  return (
    <form>
      <div className='row'>
        <div className='col-sm mt-3'>
          <label htmlFor='name'>Name</label>
          <input type='text' required className='form-control mt-2' id='name' />
        </div>
        <div className='col-sm mt-3'>
          <label htmlFor='Cost'>Cost</label>
          <input type='text' required className='form-control mt-2' id='Cost' />
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
