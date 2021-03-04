import { Link } from "react-router-dom";

const SignUpUserDetails = (props) => {
  return (
    <div>
      <div className="input-field">
        <input
          id="name"
          type="text"
          value={props.form.name}
          onChange={props.onTextChange}
        />
        <label for="name">Name</label>
        <div class="red-text email error">{props.form.nameErrors}</div>
      </div>

      <div className="input-field">
        <input
          id="surname"
          type="text"
          value={props.form.surname}
          onChange={props.onTextChange}
        />
        <label for="surname">Surname</label>
        <div class="red-text password error">{props.form.surnameErrors}</div>
      </div>

      <div className="input-field">
        <input
          id="cellNumber"
          type="number"
          value={props.form.cellNumber}
          onChange={props.onTextChange}
          minLength={10}
          maxLength={10}
          vali={true}
        />
        <label for="cellNumber">Cell Number</label>
        <div class="red-text password error">{props.form.cellNumberErrors}</div>
      </div>

      <input
        type="submit"
        id="next"
        className="waves-effect waves-light btn"
        value="Next"
      />

      <div>
        <Link to="/">skip</Link>
      </div>
    </div>
  );
};

export default SignUpUserDetails;
