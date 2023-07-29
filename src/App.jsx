import { useState } from 'react'
import './App.css'
import BotCollection from './Components/BotColllection'
import YourBotArmy from './Components/YourBotArmy'

function App() {
  const [botArmy, setBotArmy] = useState([])

  return (
    <>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} />
      <BotCollection botArmy={botArmy} setBotArmy={setBotArmy} />
    </>
  )
}

export default App
