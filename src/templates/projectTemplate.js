import React from 'react';
import { graphql } from 'gatsby';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        { frontmatter.title }
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ProjectPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
