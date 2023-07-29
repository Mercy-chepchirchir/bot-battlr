function BotCollection() {
    fetch('http://localhost:3000/bots')
        .then((res) => res.json())
        .then((data) => console.log(data))

    return (
        <div>botcollection</div>
    )
}

export default BotCollection;