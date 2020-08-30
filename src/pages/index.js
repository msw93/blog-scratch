import React from "react"
import { graphql, Link } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import styled from "@emotion/styled"

const BlogTitle = styled.h3`
  font-weight: bold;
  margin: 0 0;
  a:link, a:visited {
    color: blue;
    text-decoration: none;
  }

`

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Layout>
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <BlogTitle>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
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
