import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NewNotePage from "./pages/new-note";
import PublicNotePage from "./pages/public-note";
import AccessedNotePage from "./pages/accessed-note";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new-note" element={<NewNotePage />} />
      <Route path="/public-note" element={<PublicNotePage />} />
      <Route path="/:code" element={<AccessedNotePage />} />
    </Routes>
  );
}

export default App;
