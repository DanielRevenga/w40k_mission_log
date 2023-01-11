import styled from "styled-components"
import { SubstractCounter } from "../MissionController/SubstractCounter"

export const StyledSubstractCounter = styled(SubstractCounter)`

   color: #fff;
   border: 1px solid white;
   padding: 15px 20px;
   min-width: 60px;
   min-height: 60px;
   border-radius: 8px;
   background-color: #515459;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   &:hover {
      background-color: #878d96;
   }

`