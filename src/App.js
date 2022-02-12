import React from "react";
import tabsComponent from "./tabsNavigation/Tabs";
import Topic from "./components/Topics";

function App() {
  return (
    <div className="App">
        {tabsComponent()}
        {Topic()}
    </div>
  );
}

export default App;
