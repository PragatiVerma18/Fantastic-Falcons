import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.color};
  border: white solid 3px;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50% !important;
  }
`;

function ThemeBox({ setMode }) {
  const setTheme = (e) => {
    setMode(e.target.name);
  };

  return (
    <div className="themebox">
      <Button
        className="button"
        name="light"
        onClick={setTheme}
        color="#E2E8F0"
      ></Button>
      <Button
        className="button"
        name="dark"
        onClick={setTheme}
        color="#1A202C"
      ></Button>
    </div>
  );
}

export default ThemeBox;
