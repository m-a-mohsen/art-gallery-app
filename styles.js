import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  button {
    padding: 10px;
    margin-top: 10px;
  }

  ul {    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 10px;
    justify-content: center;
    padding: 30px;
  }

  li {
    list-style-type: none;
}

h1 {
  display: flex;
  justify-content: center;
}

form {
  display: grid;
  gap: 5px;
}

footer {
  display: grid;
  justify-content: center;
  margin-top: 20px;

}
`;
