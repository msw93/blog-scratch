import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

require("typeface-open-sans")

const Wrapper = styled.div`
  ${"" /* border: 2px solid blue; */}
  max-width: 850px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 0.2rem;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Open Sans", sans-serif;
            a {
              color: #000000;
            }
          }
          body.dark {
            -webkit-font-smoothing: antialiased;
            background-color: #121212;
            color: white;
            a {
              color: white;
            }
            header li a {
              color: black;
              font-weight: 400;
            }
            blockquote {
              background-color: #383838;
            }
            figure {
              filter: brightness(.8) contrast(1.2);
            }
          }
          p {
            opacity: 0.80;
          }

        `}
      />
      {children}
    </Wrapper>
  )
}

export default Layout
