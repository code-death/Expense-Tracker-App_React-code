import ExpenseContent from './Components/ExpenseContent.js'
import { AppProvider } from './Context/AppContext'
import Header from './Components/Header.js'
import AddExpense from './Components/AddExpense.js'
import Footer from './Components/Footer'

function App() {
  return (
    <AppProvider>
      <Header />
      <ExpenseContent />
      <AddExpense />
      <Footer />
    </AppProvider>
  )
}

export default App
