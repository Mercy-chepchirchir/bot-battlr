function YourBotArmy({ botArmy }) {
    
    const displayBotArmy = botArmy.map(({ id, name, health, damage, armor, catchphrase, avatar_url }) => {
        return (
            <div key={id} className="col">
                <div className="card h-60">
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
        <div className="p-10">
            <h3>Bot Army</h3>
            <div className="row row-cols-1 row-cols-md-5 g-3 m-4 pb-3 h-100 px-3 bot-army">
                {displayBotArmy}
            </div>
        </div>
    )
}

export default YourBotArmy