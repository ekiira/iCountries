import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <ul>
        <li>
          <Link to="/">All Countries</Link>
        </li>{" "}
        {">"}{" "}
        <li>
          <Link to="/africa">Africa</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
