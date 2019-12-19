/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import MainMenu from "./MainMenu";
import styled, {createGlobalStyle} from 'styled-components';
import { Helmet } from "react-helmet";
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
body{
    font-family: 'Montserrat', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
}

  img{
    display: block;
    border-radius: 20px;
    max-width: 100%;
    height: auto;
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h1
  {
    font-size: 27px;
    font-weight: 900 !important;
  }
  p
  {
    line-height: 27px;
    font-size: 13px;
  }
  li
  {
    line-height: 24px;
    font-size: 13px;
  }
  a
  {
    font-size: 15px;
    color: black;
    text-decoration: none;
    :hover
    {
      font-weight: 700;
      color: #440270;
    }
    padding-left: 3px;
    padding-right: 3px;
  }
  h5
  {
    width: 90px;
    text-align: center;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid black;
    border-radius: 10px;
    :hover
    {
      background-color: #8d85ed;
    }
  }
  ol
  {
    max-width: 100%;
    max-height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 0px !important;
    margin: 0px !important;
  }
  ol li
  {
    list-style-type: none;
    margin: 5px;
    border: 1.5px solid black;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 9px;
    :hover
    {
      background-color: #cface6;
    }
  }
`
const LayoutWrapper = styled.div`
  max-width: 500px;
  margin-top: 20px;
  margin-left: auto;
  margin-bottom: 20px;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 10px;
  background-color: #dedede;
  border-radius: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
`

const Layout = ({ children }) => (
  <div>
    <Helmet>
          <meta charSet="utf-8" />
          <title>imrex</title>
    </Helmet>
    <GlobalStyles />
    <MainMenu/>
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)
  


export default Layout
