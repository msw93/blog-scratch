import React from "react"
import { useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
// import { colors } from "../style/theme"

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
// const ImageMask = styled.div`
//   /* display: inline-block;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   overflow: hidden; */
// `

const IntroText = styled.p`
  font-size: 1.0rem;
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
  // const { image } = data.
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
        Written by Mike Winer who lives and works in Toronto making things and
        blogging about life and its adventures. You should give him a follow on
        Twitter.
      </IntroText>
    </FlexContainer>
  )
}

export default Bio
