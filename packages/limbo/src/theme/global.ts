/** @jsx jsx */
import { css } from '@emotion/react'

export default css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    overflow: auto;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`
