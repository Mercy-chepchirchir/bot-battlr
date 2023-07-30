import { useNavigate } from "react-router-dom";

function BotCollection({ originalBots, displayBots }) {
    const navigate = useNavigate();

    const handleBotClick = (botId) => {
        navigate(`/${botId}`)
    }

    return (
        <div>
            <h3>Bots Collection</h3>
            <div className="row row-cols-1 row-cols-md-4 g-3">            
                {displayBots(originalBots, handleBotClick)}
            </div>
        </div>
    )
}

export default BotCollection;
