import React, { useEffect } from "react";
import { GenericPanel } from "@/shared/components/custom/index";

const NoPage: React.FC = () => {

  // comments helper
  console.log("NoPage page rendered");
  useEffect(() => {
    console.log("Home page hydrated");
  }, []);
  return (
    <>
      <GenericPanel>
        <div>
          <p>Sorry, the page you visited does not exist.</p>
        </div>
      </GenericPanel>
    </>
  );
};

export default NoPage;
