import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import { BlogContent } from "../style/blog-style"

require("typeface-open-sans")

const Wrapper = styled.div`
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
            min-height: 100vh;
            background: linear-gradient(#ffffff, plum);
            font-family: "Open Sans", sans-serif;
            a {
              color: #000000;
            }
          }

          body.dark {
            -webkit-font-smoothing: antialiased;
            background: #121212;
            color: white;
            a {
              color: white;
            }
            header li a {
              color: black;
              font-weight: 400;
            }
            figure,
            img {
              filter: brightness(0.9) contrast(1.1);
            }
            figcaption {
              color: rgba(255, 255, 255, 0.6);
            }
            ${BlogContent} {
              a,
              li,
              p {
                color: rgba(255, 255, 255, 0.85);
              }
              blockquote {
                background-color: #383838;
              }
            }
          }
        `}
      />
      {children}
    </Wrapper>
  )
}

export default Layout
