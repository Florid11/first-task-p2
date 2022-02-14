import React from "react";
import tabsComponent from "./tabsNavigation/Tabs";
import ToggleState from "./ToggleTopics/Toggle";

function App() {
  return (
    <div className="App">
        {tabsComponent()}
        {ToggleState()}
    </div>
  );
}

export default App;
