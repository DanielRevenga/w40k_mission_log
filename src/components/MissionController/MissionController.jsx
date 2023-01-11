

import { StyledSubstractCounter } from "../styles/SubstractCounter.styled"
import { StyledAddCounter } from "../styles/AddCounter.styled"
import { StyledMissionSelector } from "../styles/MissionSelector.styled"
import { StyledShowCounter } from "../styles/ShowCounter.styled"
import { useState } from "react"


export const MissionController = ({
   className,
   secondaryMissions,
   setTotalPoints,
   mainMissions,
   faction,
   index,
   playerInfo
}) => {

   const [missionPoints, setMissionPoints] = useState(0)

   if (!secondaryMissions && !mainMissions) return ""

   return (
      <div className={className}>
         <StyledSubstractCounter
            substractPoints={setMissionPoints}
            missionPoints={missionPoints}
            setTotalPoints={setTotalPoints}
         />

         <StyledMissionSelector
            secondaryMissions={secondaryMissions ? JSON.parse(JSON.stringify(secondaryMissions)) : null}
            mainMissions={mainMissions ? JSON.parse(JSON.stringify(mainMissions)) : null}
            faction={faction}
            index={index}
            playerInfo={playerInfo}
         />

         <StyledShowCounter actualCount={missionPoints} />

         <StyledAddCounter
            addPoints={setMissionPoints}
            missionPoints={missionPoints}
            setTotalPoints={setTotalPoints}
            max={15}
         />
      </div>
   )
}
