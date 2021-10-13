import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";
import useModal from "./useModal";
import VideoPlayer from "./VideoPlayer";
import colors from "./colors";
import {HiPlay} from "react-icons/hi"

const VideoRoll = ({ data, dataType = "" }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const [Modal, openModal, toggleModal] = useModal();
  const [selectedVideo, setSelectedVideo] = useState("");
  return (
    <>
      <VideoGrid className="videoGrid">
        {posts &&
          posts
            .filter(({ node: post }) => post?.frontmatter?.tags?.includes("video"))
            .map(({ node: post }, index) => (
              <div
                className="is-parent column is-6 videoImage"
                key={post.id}
                onClick={() => {
                  setSelectedVideo(post.frontmatter.youtubevideo);
                  toggleModal();
                }}
              >
                <div>
                  <img
                    src={`https://i.ytimg.com/vi/${post?.frontmatter?.youtubevideo}/hqdefault.jpg`}
                    alt=""
                  />
                </div>
                <VideoTitle>{post.frontmatter.title}</VideoTitle>
              </div>
            ))}
      </VideoGrid>
      <Modal isOpen={openModal} close={toggleModal}>
        <VideoPlayer videoId={selectedVideo} />
      </Modal>
    </>
  );
};

VideoRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query VideoRollQuery {
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
                youtubevideo
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <VideoRoll data={data} count={count} />}
  />
);

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 10px;
  & .videoImage:hover {
    cursor: pointer;
  }
`;

const VideoTitle = styled.div`
  color: ${colors.base};
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 20px;
  &:hover{
      cursor: pointer;
      color: ${colors.accent}
  }
`;
