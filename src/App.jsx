import { useState, useEffect } from 'react'
import './App.css'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'
import BotCard from './Components/BotCard'

function App() {
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bots').then((res) => res.json()).then((data) => {
        setBots(data)
    })
}, [])

  const displayBots = (bots, handleBotClick) => {
    const newBotsArray = bots.map((bot) => {
      return (
          <BotCard key={bot.id} bot={bot} bots={bots} handleBotClick={handleBotClick} setBots={setBots}/>
      )
    })

    return newBotsArray
  }

  console.log(botArmy)
  return (
    <>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots}/>
      <BotCollection bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />
    </>
  )
}

export default App
