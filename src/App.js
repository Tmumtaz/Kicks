import Home from "./Routes/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
};

export default App;
