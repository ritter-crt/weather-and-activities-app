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
            <h2 className="form__heading">Add new activity</h2>
            <label htmlFor="activity" className="form__name">Activity</label>
            <input className="form__input" id="activity" name="formInput" placeholder= "My activity" required></input>
            <div className="form__goodweather">
            <label htmlFor="checkbox" className="form__name">Good weather activity?</label>
            <input type="checkbox" className="form__checkbox" id="checkbox"name="checkbox"></input>
            </div>
            <button className="form__button-submit">submit</button>
        </form>
        


    )
}