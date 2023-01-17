import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import DarkLightMode from "./components/DarkLightMode";

function App() {
  return (
    <>
      <div className="d-flex justify-content-sm-between align-items-center px-3">
        <Navbar title="TextUtilizer" />
        <DarkLightMode />
      </div>
      <div className="container mt-5">
        <TextForm heading="Enter your text below to convert into Uppercase: " />
      </div>
    </>
  );
}

export default App;
