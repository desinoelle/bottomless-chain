import './App.css'
import { useState, type FormEvent } from 'react'

function isValidNext(previous: string, next: string) : boolean {
  return previous.at(-1) === next.at(0)
}

function App() {
  const [words, setWords] = useState<string[]>(["cat", "tiger", "rabbit"])
  const [draft, setDraft] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const word = draft.trim().toLowerCase()
    if (word === "") return
    if (isValidNext(words[words.length - 1], word)) {
      setWords([...words, word])
      setDraft("")
      setError("")
    }
    else {
      setError("Invalid word")
      return
    }
  }

  return (
    
    <>
      <section id="center">
        <div>
          <ul>
            {words.map(word => (
              <li key={word}>{word}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input value={draft} onChange={e => setDraft(e.target.value)}></input>
            <button>Add</button>
          </form>
          <h3>{error}</h3>
          
        </div>
      </section>
    </>
  )
}

export default App
