import styled from "styled-components"
import { MissionController } from "../MissionController/MissionController"

export const StyledMissionController = styled(MissionController)`

   display: flex;
   justify-content: space-between;
   width: 100%;
   border-radius: 8px;
   border: ${props => props.mainMissions ? "3px solid #b88914" : "3px solid #acaeb0"};
   padding: 10px;
   margin-bottom: ${props => props.mainMissions ? "80px" : "50px"};
   margin-top: ${props => props.mainMissions ? "80px" : "0"};

`