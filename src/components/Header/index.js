import "./Header.css"
export default function Header ({weather}){
    return (
        <header className="header__weather">
        <div>{weather.temperature}°C</div>
        <div>{weather.condition}</div>
      </header>
    )
}