import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Pooja" />

      <div className="container mt-5">
        <TextForm heading="Enter your text below to convert into Uppercase: "/>
      </div>
    </>
  );
}

export default App;
