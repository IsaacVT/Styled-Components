import {
    fondoClaro,
    contenidoClaro,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    textoFondoOscuro,
} from "../Variables";

export const TemaClaro = {
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
};

export const TemaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(1)",
};
