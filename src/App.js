import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import Authentication from "./Routes/Authentication/authentication";
import Shop from "./Routes/Shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
