import "./App.css";
import React, { useEffect } from "react";
import { getCity } from "./actions/locationAction";
import { useDispatch } from "react-redux";
// import searchCity from "./apiGeolocation";

function App() {

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCity());
  });

  return <div className="App">app del clima</div>;
}

export default App;
