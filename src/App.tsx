import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import SignIn from "./page/signin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
