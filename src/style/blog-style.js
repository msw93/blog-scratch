import styled from "@emotion/styled"
import { lighten } from "polished"
import Toggler from "../components/ThemeToggle"
import { colors } from "./theme"

export const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  a {
    color: ${colors.main};
  }
`
export const BlogPost = styled.article``

export const BlogContent = styled.article`
  blockquote {
    font-style: italic;
    padding: 0.5em 10px;
    border-left: 0.32rem solid ${colors.main};
    background: #f9f9f9;
  }
  a {
    background: linear-gradient(
      to bottom,
      ${lighten(0.2, `${colors.main}`)} 0%,
      ${lighten(0.05, `${colors.main}`)} 100%
    );
    background-position: 0% 100%;
    background-repeat: repeat-x;
    background-size: 4px 3px;
    text-decoration: none;
    transition: background-size 0.3s, color 0.3s;
  }
  a:visited,
  a:link {
    /* color: black; */
  }
  a:hover {
    background-size: 4px 50px;
    color: white;
    /* color: white; */
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.main};
    margin: 0;
  }
  p {
    margin: 1rem 0;
  }
  strong {
    color: ${colors.main};
  }

  figcaption {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-style: italic;
    text-align: center;
  }
  @media (max-width: 500px) {
    figure {
      margin: 0rem 0;
    }
  }
`
export const BlogName = styled.h3`
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }
`
export const BlogHeader = styled.div`
  h1 {
    margin-bottom: 0;
  }
  p {
    font-style: italic;
    margin: 0rem 0rem;
  }
`
export const StyledToggle = styled(Toggler)`
  margin: 1rem;
  float: right;
`
