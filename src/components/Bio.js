import React from "react"
import styled from "@emotion/styled"

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
`

const IntroText = styled.p`
  font-size: 1.5rem;
`

const Bio = () => {
  return (
    <div>
      <HeaderText>All about Michael</HeaderText>
      <IntroText>
        Written by Mike Winer who lives and works in Toronto making things and
        blogging about life and its adventures. You should give him a follow on
        Twitter
      </IntroText>
    </div>
  )
}

export default Bio
