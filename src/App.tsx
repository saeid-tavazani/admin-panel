import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { UserProvider } from "./context/userContext.tsx";

import Home from "./page/home";
import SignIn from "./page/signin";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
