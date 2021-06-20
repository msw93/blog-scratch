import React from "react"
import { graphql, Link } from "gatsby"
import Toggler from "../components/ThemeToggle"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { CoolInternalLink } from "../components/CoolLinks"
import styled from "@emotion/styled"
import { colors } from "../style/theme.js"
import { kebabCase } from "lodash"

const HeaderText = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 0px auto;
  color: ${colors.main};
  line-height: 4.4rem;
`
const TagsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const Tag = styled.li`
  position: relative;
  list-style: none;
  margin-right: 3px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${colors.main};
  font-weight: 200;
  font-size: 0.8rem;
  a {
    color: white;
    text-decoration: none;
  }
`

const Blurb = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  font-style: italic;
  margin: 0.1rem auto;

  @media screen and (max-width: 500px) {
    margin: 1rem auto;
  }
`
const BlogDescription = styled.p`
  margin: 0.5rem 0px 2rem 0px;
`
const StyledToggle = styled(Toggler)`
  margin: 1rem;
  float: right;
`

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Layout>
        <Seo title="All Blogs" />
        <StyledToggle />
        <HeaderText>Mike W Blog</HeaderText>
        <Blurb>
          Computers, Japan, Language learning or anything else I find funny or
          interesting.
        </Blurb>
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <CoolInternalLink
                  to={node.fields.slug}
                  fontSize={`1.4rem`}
                  bold
                  title
                >
                  {title}
                </CoolInternalLink>
                <small>{node.frontmatter.date}</small>
                {node.frontmatter.tags ? (
                  <TagsList>
                    {node.frontmatter.tags.map(tag => {
                      return (
                        <Tag>
                          <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                        </Tag>
                      )
                    })}
                  </TagsList>
                ) : null}
              </header>
              <section>
                <BlogDescription
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
            tags
          }
        }
      }
    }
  }
`
