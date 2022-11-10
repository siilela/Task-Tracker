import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("Wasup ", e.timeStamp);
  };
  return (
    <>
      <header className="header">
        {title}
        <Button text="add" color="green" onClick={onClick} />
      </header>
    </>
  );
};

export default Header;
