import './List.css';

export default function List({ activity, weather, onDeleteActivity }) {
  const isGoodWeather = weather.isGoodWeather;
  // console.log(weather);
  // console.log(isGoodWeather);
  return (
    <>
      <ul className="list">
        <h2 className="list__header">
          {' '}
          {isGoodWeather
            ? 'Enjoy the good weather!'
            : 'Bad weather, stay cozy!'}
        </h2>
        {activity
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((filteredActivities) => (
            <div className="list__item" key={filteredActivities.id}>
              {' '}
              <div className="list__item-activity">
                {filteredActivities.name}
              </div>
              <button
                className="list__item-activity--delete"
                type="button"
                onClick={() => onDeleteActivity?.(filteredActivities.id)}
              >
                ✖️
              </button>
            </div>
          ))}
      </ul>
    </>
  );
}
