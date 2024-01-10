import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import { UseRefPage } from '../components/UseRefPage'

interface Repository {
  id: number
  name: string
}

export function ExampleUseEffect() {
  const [count, setCount] = useState(0)
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    document.title = `Contador ${count}`
  }, [count])

  const fecthRepositories = useCallback(async () => {
    try {
      const response = await axios.get('https://api.github.com/users/edicarlasillva/repos')

      setRepositories(response.data)
    } catch {
      console.log('error')
    }
  }, [])

  useEffect(() => {
    fecthRepositories()
  }, [])

  return (
    <>
    <UseRefPage />
      <p>Você clicou {count} vezes!</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      {repositories.map((repository) => {
        return <p key={repository.id}>{repository.name}</p>
      })}
    </>
  )
}

