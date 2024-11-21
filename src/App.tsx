import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { ThemeProvider } from "./components/theme-provider";
import '@/i18next'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./pages/About/About";
import AuthorPage from "./pages/Author/Author-page";

const queryClient = new QueryClient();
function App() {
  return (
    <main>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/author" element={<AuthorPage />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" index element={<SignUp />}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
