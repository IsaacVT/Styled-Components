import styled from "styled-components";
import { colorPrimario } from "../Variables";

export const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${({ primary }) => (primary ? "white" : colorPrimario)};
  background: ${({ primary }) => (primary ? "transparent" : "white")};
`;
