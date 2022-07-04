import ExpenseContent from './Components/ExpenseContent.js'
import { AppProvider } from './Context/AppContext'
import Header from './Components/Header.js'
import AddExpense from './Components/AddExpense.js'

function App() {
  return (
    <AppProvider>
      <Header />
      <ExpenseContent />
      <AddExpense />
    </AppProvider>
  )
}

export default App
