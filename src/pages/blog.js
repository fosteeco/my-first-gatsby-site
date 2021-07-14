import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = (props) => {
  console.log(props.data.allFile.nodes);
  const myPostNames = props.data.allFile.nodes;
  myPostNames.shift();
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {myPostNames.map((name) => (
          <li key={name.name}>{name.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
