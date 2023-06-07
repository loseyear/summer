import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
body {
  width: 100%;
  height: 100%;
}

body {
  box-sizing: border-box;
  font-size: 12px;
  color: red;
  background: rgb(255 0 0 / .11);
}

body,
ul,
p,
h1,
h2,
h3,
h4 {
  margin:0;
}

ul,
input {
  padding: 0;
}

ul {
  list-style: none;
}

input {
  border: 0 none;
}

b,
em {
  font-weight: normal;
}

embed,
svg,
img {
  display: block;
}

#root {
  height: 100%;
}

:placeholder {
  font-size: 12px;
  color: #909fba;
}
`
