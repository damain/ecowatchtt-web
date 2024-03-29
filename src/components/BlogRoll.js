import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const BlogRoll = ({ data, count }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts
          .filter(({ node: post }) => !post?.frontmatter?.tags?.includes("video"))
          .filter(({ node: post }, index) => {
            if (!count) return true;
            if (index < count) return true
            return false
          })
          .map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <div className="image">
                  {post.frontmatter.featuredimage ? (
                    <Link className="" to={post.fields.slug}>
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    </Link>
                  ) : null}
                </div>
                <div className="blog-preview-content">
                  <header className="blog-preview-header">
                    <h3 className="post-meta">
                      <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <h4 className="date">{post.frontmatter.date}</h4>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </article>
            </div>
          ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ({ count }) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data} count={count} />}
  />
);
