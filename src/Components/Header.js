import Budget from './Budget'
import Remaining from './Remaining'
import Spent from './Spent'

const Header = props => {
  return (
    <header className='mx-5'>
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
    </header>
  )
}

export default Header
