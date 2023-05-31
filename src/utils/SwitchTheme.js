import React from "react";
import themOn from "../assets/images/themeOn.svg";
import themOff from "../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ({ changed }) => {
    const claro = <Icono src={themOn} alt="ThemeOn" />;
    const oscuro = <Icono src={themOff} alt="ThemeOff" />;

    return <>{changed ? oscuro : claro}</>;
};
