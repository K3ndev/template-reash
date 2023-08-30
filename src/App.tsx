import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAos } from "./shared/hooks/index";
import Home from "./pages/index";
import NoPage from "./pages/404";
import { Layout } from "@/shared/components/custom/index";

function App() {
  useAos();

  // comments helper
  console.log('app rendered')
  return (
    <BrowserRouter>
      {/* you can make it null */}
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
