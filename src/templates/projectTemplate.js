import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const projectTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div className="blog-post-container">
      <Helmet title={ `${frontmatter.title} | Test Site` } />
      <div className="blog-post">
        { frontmatter.title }
        { frontmatter.vimeoId }
      </div>
    </div>
  );
}

projectTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
         title: PropTypes.string
      }),
    }),
  }),
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

export default projectTemplate;