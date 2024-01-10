import {useMemo} from 'react'

interface ExampleComponentProps {
  list: number[]
}

function ExampleComponent({list}: ExampleComponentProps) {
  const total = useMemo(() => {
    return list.reduce((acc, item) => acc + item)
  }, [list])

  return <p>Total: {total}</p>
}

export function UseMemoPage() {
  const myList = [1, 2, 3, 4, 5]

  return <ExampleComponent list={myList} />
}