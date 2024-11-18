import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { ThemeProvider } from "./components/theme-provider";
import '@/i18next'

function App() {
  return (
    <main>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" index element={<SignUp />}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
