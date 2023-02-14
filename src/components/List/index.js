import "./List.css"

export default function List({activity, weather}) {
    const isGoodWeather = weather.isGoodWeather
    console.log(weather)
    console.log(isGoodWeather)

    return ( 
        <>
        <div className="list">
            <h2> {isGoodWeather ? 'Go outside and enjoy the good weather!' : 'Bad weather, stay in your basement!'}</h2>
            {activity.filter(act => act.isForGoodWeather===isGoodWeather).map(filteredActivities => (
                <div className="list--item" key={filteredActivities.id}>{filteredActivities.name}</div>
            ))}
            </div>
        </>
    )   
}
