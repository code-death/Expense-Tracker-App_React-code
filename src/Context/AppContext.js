import { createContext, useReducer } from 'react'

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'Shopping', cost: '50' },
    { id: 2, name: 'Holiday', cost: '300' },
  ],
}

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const AppContext = createContext()

export const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
