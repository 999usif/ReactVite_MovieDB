import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home.tsx";
import Favorite from "./pages/Favorites.tsx";
import NavBar from "./components/NavBar.tsx";
import { MovieProvider } from "./contexts/MovieContext.tsx";

function App() {
  return (
    <>
      <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
      </MovieProvider>
    </>
  );
}

export default App;
