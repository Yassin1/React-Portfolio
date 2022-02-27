import React, {useEffect} from "react";
import "./App.css";
import MainContainer from "./components/maincontainer";


function App() {
  useEffect(() => {
    document.querySelector("#root").classList.add("container")
  }, [])
  return <MainContainer />
}




export default App;
