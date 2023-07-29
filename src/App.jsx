import { useState } from 'react'
import './App.css'
import BotCollection from './Components/BotColllection'
import YourBotArmy from './Components/YourBotArmy'

function App() {
  const [botArmy, setBotArmy] = useState([])

  return (
    <>
      <YourBotArmy />
      <BotCollection botArmy={botArmy} setBotArmy={setBotArmy} />
    </>
  )
}

export default App
