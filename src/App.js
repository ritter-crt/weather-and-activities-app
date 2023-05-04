import { useLocalStorage } from '@rehooks/local-storage';
import { useState, useEffect } from 'react';

import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';

function App() {
  const [activities, setActivities] = useLocalStorage('activityList', []);

  const handleAddActivity = (activityObject) => {
    setActivities([...activities, activityObject]);
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };
  // console.log(activities.id)
  const [weather, setWeather] = useState('');

  useEffect(() => {
    loadWeather();
    const timer = setInterval(loadWeather, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  async function loadWeather() {
    try {
      const response = await fetch(
        'https://example-apis.vercel.app/api/weather/europe'
      );
      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <Header weather={weather} />
      <List
        activity={activities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
      ></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;
