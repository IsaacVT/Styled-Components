import styled from "styled-components";
import { Icono } from "./Icono";

export const IconoTheme = styled(Icono)`
    filter: ${({ theme }) => theme.filter};
`;
