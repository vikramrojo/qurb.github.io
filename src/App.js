import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import XRay from 'react-x-ray'

injectGlobal`
  html {
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    font-family: 'Proza Libre';
    background-color: #F5F5F6;
  }
  body *{
    transition: all 0.25s ease;
  }
`

const AppStyles = styled.div`
  .content {
    max-width: 928px;
    margin: 0 auto;
    padding: 80px 0;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: bottom;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      {/* <XRay> */}
      <AppStyles>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav> */}
        <div className="content">
          <Routes />
        </div>
      </AppStyles>
      {/* </XRay> */}
    </Router>
</ThemeProvider>

)

export default hot(module)(App)
