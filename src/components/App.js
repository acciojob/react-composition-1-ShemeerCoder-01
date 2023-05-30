
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

let arr = [{title:"Tab1",content:"it is tab1"},{title:"Tab2",content:"it is tab2"},{title:"Tab3",content:"it is tab3"}];

const App = () => {

  let [state,setState] = useState(arr);
  
  return (
    <div>
        <Tabs tabs={state}/>
    </div>
  )
}

export default App
