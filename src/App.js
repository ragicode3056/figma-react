import React from "react";

function App() {
  return <Frame1 spanText1="Hello World" spanText2="Welcome" />;
}

export default App;

function Frame1(props) {
  const { spanText1, spanText2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1screen">
        <div className="overlap-group-container">
          <div className="overlap-group2">
            <div className="hello-worldinter-normal-black-12px">
              <span className="inter-normal-black-12px">{spanText1}</span>
            </div>
          </div>
          <div className="overlap-group1">
            <div className="placeinter-normal-black-12px">
              <span className="inter-normal-black-12px">{spanText2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}