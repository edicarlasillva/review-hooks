import { useRef } from 'react'

export function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  )
}
