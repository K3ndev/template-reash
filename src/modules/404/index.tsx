import React from 'react';
import { GenericPanel, Layout } from "../../shared/components/custom/index";

const NoPage: React.FC = () => {
  return (
    <Layout>
      <GenericPanel>
        <div>
            <p>Sorry, the page you visited does not exist.</p>
        </div>
      </GenericPanel>
    </Layout>
  );
}

export default NoPage;
