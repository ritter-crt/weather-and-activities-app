import "./List.css";
// import Delete from "./Form/assets/Delete.png"
export default function List({ activity, weather, onDeleteActivity }) {
  const isGoodWeather = weather.isGoodWeather;
  console.log(weather);
  console.log(isGoodWeather);

  return (
    <>
      <ul className="list">
        <h2 className="list__header">
          {" "}
          {isGoodWeather
            ? "Go outside and enjoy the weather!"
            : "Bad weather, stay in your basement and code!"}
        </h2>
        {activity
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((filteredActivities) => (
            <div className="list__item"key={filteredActivities.id}>
              {" "}
              <div className="list__item-activity">
                {filteredActivities.name}
              </div>
              <button
                className="list__item-activity--delete"
                type="button"
                onClick={() => onDeleteActivity?.(filteredActivities.id)}
              >x</button>
            </div>
          ))}
      </ul>
    </>
  );
}
