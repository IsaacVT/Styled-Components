import React from "react";
import { IconoTheme } from "../UI";
import alimentacion from "../assets/images/alimentacion.svg";
import salud from "../assets/images/salud.svg";
import otros from "../assets/images/otros.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

export default (type) => {
    const Images = {
        Restaurante: <IconoTheme src={alimentacion} alt="Restaurante" />,
        Salud: <IconoTheme src={salud} alt="Salud" />,
        Transporte: <IconoTheme src={transporte} alt="Transporte" />,
        Utilidades: <IconoTheme src={utilidades} alt="Utilidades" />,
        default: <IconoTheme src={otros} alt="Otros" />,
    };

    return Images[type] || Images.default;
};
