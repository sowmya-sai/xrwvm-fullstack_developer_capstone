import LoginPanel from "./components/Login/Login"
import Dealers from './components/Dealers/Dealers';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
    </Routes>
  );
}
export default App;
