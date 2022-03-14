import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form action="/action_page.php" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Patient Contact Number</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label>Name of Emergency Contact</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label>Emergency Contact Number</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label>Significant medical History</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label>Drug allergies</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input className="form-control" id="name" />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
