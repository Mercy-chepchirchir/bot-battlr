import { useEffect, useState } from "react";

function BotCollection() {
    const [bots, setBots] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/bots')
            .then((res) => res.json())
            .then((data) => {
                setBots(data)
            })
    }, [])
    
    console.log(bots)

    return (
        <div>botcollection</div>
    )
}

export default BotCollection;