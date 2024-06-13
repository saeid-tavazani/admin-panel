import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

import Home from "./page/home";
import SignIn from "./page/signin";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
