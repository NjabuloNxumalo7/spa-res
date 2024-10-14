import React from "react";

const FloatingSelect = () => {
  return (
    <div className="form-floating">
      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option value="" disabled selected>
          Open this select menu
        </option>
        <option value="1">Lwandile</option>
        <option value="2">Anathi</option>
        <option value="3">Milani</option>
      </select>
    
    </div>
  );
};

export default FloatingSelect;
