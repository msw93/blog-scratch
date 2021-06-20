import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { CoolExternalLink } from "./CoolLinks"

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IntroText = styled.p`
  font-size: 1rem;
  font-weight: 200;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/face-avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const fixedImage = data.avatar.childImageSharp.fixed
  return (
    <FlexContainer>
      <Image
        style={{ borderRadius: `100%`, minWidth: 50, marginRight: `0.5rem` }}
        imgStyle={{
          borderRadius: `50%`,
        }}
        fixed={fixedImage}
      />
      <IntroText>
        Written by Mike W who lives and works in Toronto making things and
        blogging about life and its adventures. Find me on{" "}
        <CoolExternalLink href="https://twitter.com/MikeFromGunma">
          Twitter here
        </CoolExternalLink>
        .
      </IntroText>
    </FlexContainer>
  )
}

export default Bio
