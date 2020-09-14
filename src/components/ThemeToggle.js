import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "@emotion/styled"
import { colors } from "../style/theme.js"

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.main};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  ::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color:  #ffed1e;
    /* background: radial-gradient(#fceabb, #f8b500); */
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`
const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider}:before {
    -webkit-transform: translateX(21px);
    -ms-transform: translateX(21px);
    transform: translateX(21px);
    /* background-color: #383838; */
    box-shadow: inset 6px -4px #f9f9f9;
    background: ${colors.main};
  }
`

const Toggler = ({className}) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Switch className={className}>
          <Checkbox
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          <Slider></Slider>
        </Switch>
      )}
    </ThemeToggler>
  )
}

export default Toggler
