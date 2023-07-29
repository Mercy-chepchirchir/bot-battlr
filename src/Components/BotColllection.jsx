import {useEffect, useState} from "react";

function BotCollection() {
    const [bots, setBots] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/bots').then((res) => res.json()).then((data) => {
            setBots(data)
        })
    }, [])

    const displayBots = bots.map(({ name, health, damage, armor, catchphrase, avatar_url }) => {
        return (
            <div className="col">
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
        <div class="row row-cols-1 row-cols-md-4 g-3">
            {displayBots}
        </div>
    )
}

export default BotCollection;
