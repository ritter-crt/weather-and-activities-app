import "./List.css"

export default function List({activity}) {
    console.log(activity)
    return ( 
        <div 
        className="list"
        // value={activity}
        >{activity.name}</div>
        )   
}

