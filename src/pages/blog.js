import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";

const BlogPage = (props) => {
  console.log(props.data.allFile.nodes);
  const myPostNames = props.data.allFile.edges;
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {myPostNames.map((name) => (
          <li key={name.node.name}>
            <Link to={name.node.name}>{name.node.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export default BlogPage;
