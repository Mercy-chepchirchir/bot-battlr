import {useEffect, useState} from "react";

function BotCollection({ botArmy, setBotArmy }) {
    const [bots, setBots] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/bots').then((res) => res.json()).then((data) => {
            setBots(data)
        })
    }, [])

    const handleBotClick = (botId) => {
    
        // *find* returns the entire item (bot) if the condition passes (bot id matches)
        const clickedBot = bots.find((bot) => {
            return bot.id === botId
        })

        // *some* returns true if clicked bot is in army otherwise returns false
        const clickedBotIsInArmy = botArmy.some((bot) => {
            return bot.id === botId
        })

        console.log(clickedBotIsInArmy)

        // use ! (not operator) to see if clickedBot is not in army (return opposite)
        if (!clickedBotIsInArmy) {
           setBotArmy([...botArmy, clickedBot])
        } 
    }

    const displayBots = bots.map(({ id, name, health, damage, armor, catchphrase, avatar_url }) => {
        return (
            <div key={id} className="col bot-card" onClick={() => { handleBotClick(id) }}>
                <div className="card h-100">
                    <img src={avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{catchphrase}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{health}, {damage}, {armor}</small>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <h3>Bots Collection</h3>
            <div className="row row-cols-1 row-cols-md-4 g-3">            
                {displayBots}
            </div>
        </div>
    )
}

export default BotCollection;
