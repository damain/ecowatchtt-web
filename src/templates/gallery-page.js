import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout"

function GalleryPage({ data }) {
  const {edges: gallery} = data.allMarkdownRemark
  return <Layout>
      {gallery.map(images=><div>image</div>)}
  </Layout>;
}




export default () => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "gallery-page" } } }) {
          edges {
            node {
              id
              frontmatter {
                templateKey
                images {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  description
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GalleryPage data={data} count={count} />}
  />
);
