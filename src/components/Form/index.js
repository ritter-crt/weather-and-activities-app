import { uid } from 'uid';

import './Form.css';

export default function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formInput = form.elements.formInput.value;
    const checkbox = form.elements.checkbox.checked;
    // console.log(formInput)
    // console.log(checkbox)

    const newActivity = {
      name: formInput,
      isForGoodWeather: checkbox,
      id: uid(),
    };

    onAddActivity(newActivity);

    form.reset();
    form.elements.formInput.focus();
  };

  return (
    <form className="form__activity" onSubmit={handleSubmit}>
      <label className="form__name" htmlFor="activity">
        Add new activity
      </label>
      <input
        className="form__input"
        id="activity"
        name="formInput"
        placeholder="e.g. go to an exhibition"
        required
      ></input>
      <div className="form__goodweather">
        <label className="form__label" htmlFor="checkbox">
          Good weather activity?
        </label>
        <input
          type="checkbox"
          className="form__checkbox"
          id="checkbox"
          name="checkbox"
        ></input>
      </div>
      <button className="form__button-submit">submit</button>
    </form>
  );
}
