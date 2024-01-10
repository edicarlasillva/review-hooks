import {createContext, useContext, useState} from 'react'

const CountContext = createContext(0)

export function AppOld() {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={3}>
      <Home />
    </CountContext.Provider>
  )
}

export function Home() {
  const count = useContext(CountContext)
  return <p>{count}</p>
}
