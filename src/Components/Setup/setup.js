import React from "react";

function Setup({ starthandle }) {
  return (
    <div>
      <div className="header">
        <h1>Do you need a reality chuck?!</h1>
      </div>
      <div className="button-container">
        <button className="btn-start" onClick={() => starthandle()}>
          GET STARTED!
        </button>
      </div>
    </div>
  );
}

export default Setup;
