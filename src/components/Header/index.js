export default function Header ({weather}){
    return (
        <header className="header__weather">
        <div>{weather.location}</div>
        <div>{weather.temperature}°</div>
        <div>{weather.condition}</div>
      </header>
    )
}