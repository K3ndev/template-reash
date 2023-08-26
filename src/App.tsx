import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAos } from "./shared/hooks/index";
import Home from "./pages/index";
import NoPage from "./modules/404";

function App() {
  useAos();

  return (
    <BrowserRouter>
      {/* you can make it null */}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
