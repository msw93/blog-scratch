import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { lighten } from 'polished'
import { colors } from "../style/theme"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Toggler from "../components/ThemeToggle"
import { DiscussionEmbed } from "disqus-react"

const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  a {
    color: ${colors.main};
  }
`
export const BlogPost = styled.article``

export const BlogContent = styled.article`
  blockquote {
    font-style: italic;
    padding: 0.5em 10px;
    border-left: 0.32rem solid ${colors.main};
    background: #f9f9f9;
  }
  a {
    background: linear-gradient(
      to bottom,
      ${lighten(0.2, `${colors.main}`)} 0%,
      ${lighten(0.05, `${colors.main}`)} 100%
    );
    background-position: 0% 100%;
    background-repeat: repeat-x;
    background-size: 4px 3px;
    text-decoration: none;
    transition: background-size 0.3s;
  }
  a:visited,
  a:link {
    /* color: black; */
  }
  a:hover {
    background-size: 4px 50px;
    /* color: white; */
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.main};
    margin: 0;
  }
  p {
    margin: 1rem 0;
  }
  strong {
    color: ${colors.main};
  }
  /* figure {
    max-height: 90vh;
    max-width: 100vw;
  }
  img{
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
  } */
  /* figure {
    margin: 0rem 0;
  } */
  figcaption {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-style: italic;
    text-align: center;
  }
  @media (max-width: 500px) {
    figure {
      margin: 0rem 0;
    }
  }
`
const BlogName = styled.h3`
  a:hover,
  a:visited,
  a:link,
  a:active {
    /* color: black; */
    text-decoration: none;
  }
`
const BlogHeader = styled.div`
  h1 {
    margin-bottom: 0;
  }
  p {
    font-style: italic;
    margin: 0rem 0rem;
  }
`
const StyledToggle = styled(Toggler)`
  margin: 1rem;
  float: right;
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.frontmatter.title },
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <StyledToggle />
      <BlogName>
        <Link to="/">Mike W's Blog</Link>
      </BlogName>
      <BlogPost>
        <BlogHeader>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
          <small>{post.frontmatter.date}</small>
        </BlogHeader>
        <hr
          style={{
            border: `${colors.main} solid 1px`,
            margin: `5px 0px`,
            width: `60%`,
          }}
        />
        <br />
        <BlogContent>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />

          <hr
            style={{ border: `${colors.main} solid 1px`, margin: `30px 0px` }}
          />
        </BlogContent>
        <footer>
          <Bio />
        </footer>
      </BlogPost>

      <nav>
        <NavLinks>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
          <li>
            <Link to="/" rel="next">
              Let's go Home{" "}
              <span role="img" aria-label="home">
                🏠
              </span>
            </Link>
          </li>
        </NavLinks>
      </nav>
   
      <DiscussionEmbed shortname={disqusConfig.shortname} config={disqusConfig.config} style={{ marginTop: `3rem` }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
