import { useEffect, useState } from "react"
import { StyledCommandPointsController } from "../styles/CommandPointsController.styled"
import { StyledFactionSelector } from "../styles/FactionSelector.styled"
import { StyledMissionController } from "../styles/MissionController.styled"


export const Player = ({
   className,
   mainMissions,
   secondaryMissions,
   missionControllersNumber,
   factions,
   playerInfo
}) => {


   const [totalPoints, setTotalPoints] = useState(10)
   const [faction, setFaction] = useState(null)

   useEffect(() => {
      if (factions && faction == null) {
         setFaction(factions[0])
      }
   }, [factions])

   if (!factions) return ""

   return (
      <div className={className}>
         <div className="player_basic_info">
            <StyledCommandPointsController />

            <div className="player_basic_info_factions">
               <StyledFactionSelector
                  factions={factions}
                  setFaction={setFaction}
               />
            </div>
         </div>

         <StyledMissionController
            mainMissions={mainMissions}
            setTotalPoints={setTotalPoints}
         />

         {
            faction &&
            Array(missionControllersNumber).fill().map((player, index) => {
               return (
                  <StyledMissionController
                     key={`secondary_mission_controller_${index}`}
                     secondaryMissions={secondaryMissions}
                     faction={faction}
                     index={index + 1}
                     setTotalPoints={setTotalPoints}
                     playerInfo={playerInfo}
                  />
               )
            })
         }

         <div className="totalPoints">{totalPoints}</div>
      </div>
   )
}
