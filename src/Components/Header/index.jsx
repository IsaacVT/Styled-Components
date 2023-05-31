import React from "react";
import logo from "../../assets/images/logo.svg";
import { StyledHeader, BtnHeader, Logo } from "../../UI";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader href="https://google.com">Ayuda</BtnHeader>
        <BtnHeader primary href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Header;
