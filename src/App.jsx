import { useState } from 'react'
import './App.css'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'

function App() {
  const [botArmy, setBotArmy] = useState([])
  console.log(botArmy)
  return (
    <>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} />
      <BotCollection botArmy={botArmy} setBotArmy={setBotArmy} />
    </>
  )
}

export default App
