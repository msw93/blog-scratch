import React from "react"
import { Link, graphql } from "gatsby"
import { colors } from "../style/theme"
import Seo from "../components/Seo"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import { DiscussionEmbed } from "disqus-react"
import {
  BlogName,
  BlogPost,
  BlogContent,
  StyledToggle,
  BlogHeader,
  NavLinks,
} from "../style/blog-style"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.frontmatter.title },
  }

  return (
    <Layout>
      <Seo
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

      <DiscussionEmbed {...disqusConfig} style={{ marginTop: `3rem` }} />
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
