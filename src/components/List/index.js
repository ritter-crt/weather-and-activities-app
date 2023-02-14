import "./List.css";

export default function List({ activity, weather, onDeleteActivity }) {
  const isGoodWeather = weather.isGoodWeather;
  console.log(weather);
  console.log(isGoodWeather);

  return (
    <>
      <div className="list">
        <h2>
          {" "}
          {isGoodWeather
            ? "Go outside and enjoy the good weather!"
            : "Bad weather, stay in your basement!"}
        </h2>
        {activity
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((filteredActivities) => (
            <div>
              {" "}
              <div className="list--item" key={filteredActivities.id}>
                {filteredActivities.name}
              </div>
              <button
                className=""
                type="button"
                onClick={() => onDeleteActivity?.(filteredActivities.id)}
              >x</button>
            </div>
          ))}
      </div>
    </>
  );
}
