import "./List.css"

// export default function List({activity}) {
//     console.log(activity)
//     console.log(activity[0].name)

//     return ( 
//         <div className="list">
//         {activity.map((a) => { 
//         return <div key={activity.id}>{a.name}</div> })}
//         </div>
//     )   
// }

export default function List({activity}) {
    console.log(activity)
    // console.log(activity[0].name)

    const isGoodWeather = true;

    return ( 
        <>
        <h2>Go outside and enjoy the good weather!</h2>
        <div className="list">
            {activity.filter(act => act.isForGoodWeather===isGoodWeather).map(filteredActivities => (
                <div key={filteredActivities.id}>{filteredActivities.name}</div>
            ))}
            </div>
        </>
    )   
}
