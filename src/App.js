import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import { useLocalStorage } from '@rehooks/local-storage';

function App() {
  const [activity, setActivity] = useLocalStorage("activityList", " " );
  // const [activityList, setNewActivities] = useLocalStorage("activityList", {defaultValue: []})

  const handleAddActivity= (activity) =>{
    setActivity({...activity, activity})
  }
  
console.log(activity)

  return (
    <div className="">
      <header className="App-header"> Weather App</header>
      <Form onAddActivity={handleAddActivity}></Form>
      <List activity={activity}></List>
    </div>
  );
}

export default App;




