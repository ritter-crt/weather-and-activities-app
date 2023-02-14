import "./List.css"

export default function List({activity}) {
    console.log(activity)
    console.log(activity[0].name)

    return ( 
        <div className="list">
        {activity.map((a) => { 
        return <div key={activity.id}>{a.name}</div> })}
        </div>
    )   
}

