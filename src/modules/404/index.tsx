import React, { useEffect } from "react";
import { GenericPanel, Layout } from "../../shared/components/custom/index";

const NoPage: React.FC = () => {

  // comments helper
  console.log("NoPage page rendered");
  useEffect(() => {
    console.log("Home page hydrated");
  }, []);
  return (
    <Layout>
      <GenericPanel>
        <div>
          <p>Sorry, the page you visited does not exist.</p>
        </div>
      </GenericPanel>
    </Layout>
  );
};

export default NoPage;
