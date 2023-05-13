import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #666;
  font-display: auto;
}


::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}

::-webkit-scrollbar-thumb {
  background: #002581;
  border: 0.1em solid #fff;
  border-radius: 100vw;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}

a {
  color: #666;
}

a,
a:hover,
a:focus {
  text-decoration: none;
  display: inline-block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: var(--blue);
}

h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

h3 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
}

h4 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
}

h5 {
  font-size: 14px;
  font-weight: 700;
  color: var(--sharpblack);
}

h6 {
  font-size: 10px;
}

p {
  margin-bottom: 15px;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Header Css  */

@media (min-width: 576px) {
  
}
@media (min-width: 768px) {
  
}
@media (min-width: 992px) {
  
}
@media (min-width: 1200px) {
  
}

`;
