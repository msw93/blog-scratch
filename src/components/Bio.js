import React from "react"
import styled from "@emotion/styled"

const HeaderText = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 0rem auto;
  color: #47b8d4;
`

const IntroText = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
`
const Blurb = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  font-style: italic;
  margin: 0rem auto;

`


const Bio = () => {
  return (
    <div>
      <HeaderText>Mike Winer's Blog</HeaderText>
      <Blurb>Computers, Japan, Language learning or anything else I find funny or interesting.</Blurb>
      <IntroText>
        Written by Mike Winer who lives and works in Toronto making things and
        blogging about life and its adventures. You should give him a follow on
        Twitter.
      </IntroText>
    </div>
  )
}

export default Bio
