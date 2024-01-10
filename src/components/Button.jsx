import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="btn-note" onClick={onClick}>
      + New Notes
    </button>
  );
};

export default Button;
