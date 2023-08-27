import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Style/UserForm.css";

function UserForm({ onUserSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    onUserSubmit(username);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="GitHub korisničko ime"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSubmit} className="submit-button">
        Pronađi korisnika
      </button>
    </div>
  );
}

UserForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default UserForm;
