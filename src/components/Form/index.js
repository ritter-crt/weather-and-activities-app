import "./Form.css"
import { uid } from "uid";

export default function Form ({onAddActivity, activity}) {

    const handleSubmit=(event)=>{
        event.preventDefault();
    
        const form = event.target; 
        const formInput = form.elements.formInput.value;
        const checkbox = form.elements.checkbox.checked;
        // console.log(formInput)
        // console.log(checkbox)
    
        const newActivity = {
            name:formInput, 
            isForGoodWeather: checkbox, 
            id: uid()
          };

        onAddActivity(newActivity)
    
        form.reset()
        form.elements.formInput.focus()
    }


    return (
        <form className="form__activity" onSubmit={handleSubmit}>
            <h1 className="form__heading">Add new Activity</h1>
            <label htmlFor="activity">Name</label>
            <input className="form__input" id="activity" name="formInput" placeholder= "My activity for today" required></input>
            <label htmlFor="checkbox">Good-weather activity</label>
            <input type="checkbox" className="checkbox" name="checkbox"></input>
            <button>Submit</button>
        </form>
        


    )
}