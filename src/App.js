import "./App.scss";
import Homepage from "./pages/Home/Homepage";
import Registration from "./pages/Registrations/Registration";
import { Routes, Route } from "react-router-dom";
// layout
import MainLayout from "./Layout/MainLayout";

//pages

function App() {
  return (
    <div className="App">
      <MainLayout />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
