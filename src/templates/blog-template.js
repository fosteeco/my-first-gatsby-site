import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="container">
        <div>
          <h2>{frontmatter.date}</h2>
          <p>Category: {frontmatter.category}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Link to="/blog">Back to blog home</Link>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
      }
    }
  }
`;
