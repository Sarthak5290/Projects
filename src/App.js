import { useState } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import Alert from "./componenets/Alert";
import About from "./componenets/About2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light"); // whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0c2341";
      document.body.style.color = "white";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          title="TextUtiles"
          home="Home"
          aboutText="About-Textutils"
        ></Navbar>
        <Alert alert={alert}> </Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About></About>}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  haeding="Enter the text to analyze below"
                ></TextForm>
              }
            ></Route>
          </Routes>
        </div>{" "}
      </Router>
    </>
  );
}

export default App;
