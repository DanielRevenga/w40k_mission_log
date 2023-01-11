import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { ENEMY_INFO_UPDATE_SELECT, ALLY_INFO_UPDATE_SELECT } from "../../graphql/mutations"
import { ENEMY_INFO_GETALL_QUERY, ALLY_INFO_GETALL_QUERY, GET_ALL_INIT_QUERIES } from "../../graphql/queries"


export const MissionSelector = ({
   className,
   secondaryMissions,
   mainMissions,
   faction,
   index,
   playerInfo
}) => {

   const [enemyInfo_update] = useMutation(ENEMY_INFO_UPDATE_SELECT, {
      refetchQueries: [{ query: GET_ALL_INIT_QUERIES }]
   })
   const [allyInfo_update] = useMutation(ALLY_INFO_UPDATE_SELECT, {
      refetchQueries: [{ query: GET_ALL_INIT_QUERIES }]
   })

   const [missions, setMissions] = useState(null)
   const [playerData, setPlayerData] = useState(null)
   const [lastMissionSelected, setLastMissionSelected] = useState(null)

   useEffect(() => {
      if (mainMissions) {
         setMissions(mainMissions)
      } else {
         setMissions(secondaryMissions.filter(mission => (mission.faction === faction.id) || mission.faction === 0))
      }
      if (playerInfo) {
         setPlayerData(playerInfo[0])
         setMissions(missions => {
            const selectedPlayerMissions = [
               playerInfo[0].secondaryMission_1,
               playerInfo[0].secondaryMission_2,
               playerInfo[0].secondaryMission_3
            ]
            const notAvailableCategories = missions.filter(mission => selectedPlayerMissions.includes(mission.id))
               .map(mission => mission.category)
            console.log("not", notAvailableCategories)
            const filteredMissions = missions.filter(mission => {
               const isNotSelected = !selectedPlayerMissions.includes(mission.id) || mission.id === playerInfo[0][`secondaryMission_${index}`]
               if (mission.id === 1) console.log("is", isNotSelected)
               const missionsAvailableByCategory = !notAvailableCategories.includes(mission.category)
                  || mission.category === notAvailableCategories[index - 1]
               if (mission.id === 1) console.log("is2", missionsAvailableByCategory)
               console.log("wot: ", notAvailableCategories.includes(mission.category))
               return missionsAvailableByCategory || (isNotSelected && missionsAvailableByCategory)
            })

            return filteredMissions
         })
      }
   }, [secondaryMissions, mainMissions, faction, playerInfo])

   useEffect(() => {
      if (lastMissionSelected != null) {
         missions[lastMissionSelected].selected = false
         setMissions(missions)
      }
   }, [lastMissionSelected])
   console.log(playerData)
   const onChangeMissionHandler = async (e) => {
      const selectedMissionName = e.target.value
      const selectedMissionIndex = missions.findIndex(mission => mission.name === selectedMissionName)
      const selectedMission = missions[selectedMissionIndex]

      const variables = {}
      variables.id = playerInfo[0].id
      variables[`secondaryMission_${index}`] = selectedMission.id

      if (playerInfo[0].enemy) {
         await enemyInfo_update({ variables })
      } else {
         await allyInfo_update({ variables })
      }

   }



   return (
      <select
         name="mission"
         className={`mission-selector ${className}`}
         onChange={onChangeMissionHandler}
      >
         {
            !missions
               ? <option value="-1">Loading...</option>
               : (
                  <>
                     <option value="-1">Choose a mission</option>
                     {
                        missions
                           .map((mission, index) => {
                              return (
                                 <option
                                    value={`${mission.name}`}
                                    key={`${mission.category}_${index}`}
                                 >
                                    {mission.name}
                                 </option>
                              )
                           })
                     }
                  </>
               )

         }
      </select>
   )
}
