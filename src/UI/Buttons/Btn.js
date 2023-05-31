import styled from "styled-components";
import { colorPrimario } from "../Variables";

export const Btn = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${colorPrimario};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;
