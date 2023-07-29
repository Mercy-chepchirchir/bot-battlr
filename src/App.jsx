import { useState } from 'react'
import './App.css'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'

function App() {
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
    
  useEffect(() => {
      fetch('http://localhost:3000/bots').then((res) => res.json()).then((data) => {
          setBots(data)
      })
  }, [])

  console.log(botArmy)

  return (
    <>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} />
      <BotCollection bots={bots} setBots={setBots} botArmy={botArmy} setBotArmy={setBotArmy} />
    </>
  )
}

export default App
