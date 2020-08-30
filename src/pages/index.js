import React from "react"
import { graphql, Link } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from '../components/Seo';
import styled from "@emotion/styled"
import { colors } from "../style/theme.js"

const BlogTitle = styled.h3`
  font-weight: bold;
  margin: 0 0;
  a {
    background: linear-gradient(
      to bottom,
      ${colors.main} 0%,
      ${colors.main} 100%
    );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 3px 3px;
    text-decoration: none;
    transition: background-size 0.3s;
  }
  a:link,
  a:visited {
    font-size: 1.4rem;
    color: black;
    /* text-decoration: none; */
  }
  a:hover {
    background-size: 4px 50px;
    /* color: white; */
  }
`

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Layout>
        <SEO title="Mike's Blog"/>
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <BlogTitle>
                  <Link to={node.fields.slug}>{title}</Link>
                </BlogTitle>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
