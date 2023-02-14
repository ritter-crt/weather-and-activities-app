import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useLocalStorage } from '@rehooks/local-storage';

function App() {
  const [activity, setActivity] = useLocalStorage("activityList", [] );
  // const [activityList, setNewActivities] = useLocalStorage("activityList", {defaultValue: []})

  const handleAddActivity= (activityObject) =>{
    setActivity([...activity,activityObject])
  }
  
// console.log(activity)

  return (
    <div className="">
      <header className="App-header"> Weather App</header>
      <Form onAddActivity={handleAddActivity}></Form>
      <List activity={activity}></List>
    </div>
  );
}

export default App;




