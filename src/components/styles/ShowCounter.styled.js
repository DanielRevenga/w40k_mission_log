import styled from "styled-components"
import { ShowCounter } from "../MissionController/ShowCounter"

export const StyledShowCounter = styled(ShowCounter)`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: ${props => props.rounded ? "50%" : "8px"};
   padding: 15px 20px;
   min-width: 30px;
   min-height: 30px;
   background-color: #5880bf;
   border: 1px solid white;

`