import React from "react";

import Layout from "../components/layouts/home-layout";
import SEO from "../components/seo";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You have broken the fabric of space-time....please go back.</p>
  </Layout>
);

export default NotFoundPage;
