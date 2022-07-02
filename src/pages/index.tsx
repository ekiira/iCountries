import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <div>
        <ul>
          <li>
            <Link to="/">All Countries</Link>
          </li>
        </ul>
      </div>
      <div> <Link to="/africa">Africa</Link></div>

      <div></div>
    </Layout>
  );
};

export default IndexPage;
