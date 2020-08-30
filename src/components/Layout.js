import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

require("typeface-open-sans")

const Wrapper = styled.div`
  ${'' /* border: 2px solid blue; */}
  max-width: 850px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global
        styles={css`

           html, body {
            padding:0;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}

export default Layout
