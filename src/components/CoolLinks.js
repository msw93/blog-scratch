import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { lighten } from "polished"
import { colors } from "../style/theme"

const External = styled.a`
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
  font-size: ${props => (props.fontSize ? props.fontSize : "inherit")};
  font-weight: ${props => (props.bold ? "bold" : "inherit")};

  :hover {
    background-size: 4px 50px;
    color: white;
    /* color: white; */
  }
`

const Internal = styled(Link)`
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
  font-size: ${props => {
    return props.fontSize ? props.fontSize : "inherit"
  }};
  font-weight: ${props => (props.bold ? "bold" : "inherit")};
  display: ${props => (props.title ? "table" : "inline-block")};
  :hover {
    background-size: 4px 50px;
    color: white;
  }
`

export const CoolExternalLink = ({ href, children, fontSize, bold }) => {
  return (
    <External
      fontSize={fontSize}
      href={href}
      target="__blank"
      bold={bold ? bold : false}
    >
      {children}
    </External>
  )
}

export const CoolInternalLink = ({ to, children, fontSize, bold, title }) => {
  return (
    <Internal to={to} fontSize={fontSize} bold={bold ? bold : false} title={title}>
      {children}
    </Internal>
  )
}
