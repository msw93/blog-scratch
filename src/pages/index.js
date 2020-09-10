import React from "react"
import { graphql, Link } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "@emotion/styled"
import { colors } from "../style/theme.js"

const HeaderText = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 0rem auto;
  color: ${colors.main};
  line-height: 4.4rem;
`
const TagsList = styled.ul`
  color: ${colors.main};
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
  /* border: 1px solid grey; */
  background-color: ${colors.main};
  font-weight: 200;
  font-size: 0.9rem;
  /* color: white; */
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
const BlogTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0 0;
  color: black;
  a {
    background: linear-gradient(
      to bottom,
      ${colors.main} 0%,
      ${colors.main} 100%
    );
    background-position: 0% 100%;
    background-repeat: repeat-x;
    background-size: 4px 3px;
    text-decoration: none;
    transition: background-size 0.3s;
  }
  a:visited,
  a:link {
    color: black;
  }
  a:hover {
    background-size: 4px 50px;
    /* color: white; */
  }
`
const BlogDescription = styled.p`
  margin: 0px 0px 2rem;
`

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges
  //console.log(posts[2].node.frontmatter.tags, 'hi')

  return (
    <div>
      <Layout>
        <SEO title="All Blogs" />
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
                <BlogTitle>
                  <Link to={node.fields.slug}>{title}</Link>
                </BlogTitle>
                <small>{node.frontmatter.date}</small>
                {node.frontmatter.tags ? (
                  <TagsList>
                    {node.frontmatter.tags.map(tag => {
                      return <Tag><Link to={`/tags/${tag}`}>{tag}</Link></Tag>
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
