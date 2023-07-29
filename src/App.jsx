import { useState } from 'react'
import './App.css'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'
import BotCard from './Components/BotCard'

function App() {
  const [botArmy, setBotArmy] = useState([])

  const displayBots = (bots, handleBotClick) => {
    return bots.map((bot) => {
      return (
          <BotCard key={bot.id} bot={bot} handleBotClick={handleBotClick}/>
      )
    })
  }

  return (
    <>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots}/>
      <BotCollection botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />
    </>
  )
}

export default App
