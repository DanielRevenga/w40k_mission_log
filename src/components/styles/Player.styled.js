import styled from "styled-components"
import { Player } from "../Player/Player"

export const StyledPlayer = styled(Player)`

   width: 33vw;
   div.totalPoints {
      color: #1cb0ad;
      display: flex;
      justify-content: center;
      border: 3px solid #acaeb0;
      padding: 10px;
      border-radius: 8px;
      font-size: 2.1rem;
   }

   div.player_basic_info {

      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0;
   }

   div.player_basic_info_factions {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      margin-left: 5px;
      min-height: 70px;
      border-radius: 8px;
      border: 3px solid #acaeb0;
      margin-bottom: 50px;
   }
`