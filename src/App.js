import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState({});
  
  const handleAddActivity= (activity) =>{
    setActivity(activity)
  }
  
console.log(activity)

  return (
    <div className="">
      <header className="App-header"> Weather App</header>
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;
