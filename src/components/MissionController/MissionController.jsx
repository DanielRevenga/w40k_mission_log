

import { StyledSubstractCounter } from "../styles/SubstractCounter.styled"
import { StyledAddCounter } from "../styles/AddCounter.styled"
import { StyledMissionSelector } from "../styles/MissionSelector.styled"
import { StyledShowCounter } from "../styles/ShowCounter.styled"
import { useState } from "react"



export const MissionController = ({ className }) => {

   const [missionPoints, setMissionPoints] = useState(0)

   return (
      <div className={className}>
         <StyledSubstractCounter substractPoints={setMissionPoints} />

         <StyledMissionSelector />

         <StyledShowCounter actualCount={missionPoints} />

         <StyledAddCounter addPoints={setMissionPoints} />
      </div>
   )
}
