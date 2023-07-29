import { HiXMark } from "react-icons/hi2"

function BotCard({ bot, originalBots, handleBotClick, setOriginalBots }) {
    const { id, name, health, damage, armor, catchphrase, avatar_url } = bot;

    const handleXClick = (botId) => {

        fetch(`http://localhost:3000/bots/${botId}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(() => {
            const filteredBots = originalBots.filter((oneBot) => {
                return oneBot.id !== bot.id
            })

            setOriginalBots(filteredBots)
        })
    }

    return (
        <div key={id} className="col bot-card">
            <div className="card h-100">
                {/* X mark icon styling */}
                <div style={{ display: "flex", justifyContent: "right" }}>
                    <div className="xmark-box" onClick={() => { handleXClick(id) }}>
                        <HiXMark color="red" size="2rem"/>
                    </div>
                </div>

                <div className="card-main-details" onClick={() => { handleBotClick(id) }}>
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
        </div>
    )
}

export default BotCard