import "./App.css";
import React, { createContext, useState, useEffect } from "react";

import Form from "./components/Form.js";

export const MyContext = createContext();

function App() {
  const nullNegotiationData = {
    tower: null,
    floor: null,
    room: null,
    date: null,
    comment: null,
  };

  const [negotiation, setNegotiation] = useState(nullNegotiationData);

  return (
    <MyContext.Provider
      value={{ nullNegotiationData, negotiation, setNegotiation }}
    >
      <div className="App">
        <Form />
      </div>
    </MyContext.Provider>
  );
}

export default App;
