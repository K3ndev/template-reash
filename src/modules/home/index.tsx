import React, { useState } from "react";
import reactLogo from "../../../public/react.svg";
import viteLogo from "../../../public/vite.svg";
import { Button } from "../../shared/components/ui/button";
import { GenericPanel, Layout } from "../../shared/components/custom/index";
const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <GenericPanel>
        <div data-aos="fade-up" className="flex justify-center gap-10 mb-20">
          <div className="flex">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold underline">Vite + React</h1>
        </div>
        <div className="text-center">
          <Button
            onClick={() => setCount((count) => count + 1)}
            className="bg-red-400 "
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p>Click on the Vite and React logos to learn more</p>
        </div>
      </GenericPanel>
    </Layout>
  );
}

export default App;
