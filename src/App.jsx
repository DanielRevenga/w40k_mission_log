import { useEffect, useState } from "react"

import "./App.css"
import { StyledAppContainer } from "./components/styles/AppContainer.styled"
import { StyledPlayer } from "./components/styles/Player.styled"
import { useInitInfo } from "./custom-hooks"




function App() {


   const { data, loading, error } = useInitInfo()

   const [mainMissions, setMainMissions] = useState(null)
   const [secondaryMissions, setSecondaryMissions] = useState(null)
   const [factions, setFactions] = useState(null)
   const [enemyInfo, setEnemyInfo] = useState(null)
   const [allyInfo, setAllyInfo] = useState(null)

   useEffect(() => {
      if (data) {
         if (data.mainMissions_getAll) {
            setMainMissions(data.mainMissions_getAll)
         }
         if (data.secondaryMissions_getAll) {
            setSecondaryMissions(data.secondaryMissions_getAll)
         }
         if (data.factions_getAll) {
            setFactions(data.factions_getAll)
         }
         if (data.enemyInfo_getAll) {
            setEnemyInfo(data.enemyInfo_getAll)
         }
         if (data.allyInfo_getAll) {
            setAllyInfo(data.allyInfo_getAll)
         }
      }

   }, [data])

   if (error) return <span>{error.message}</span>
   if (loading) return <span>Loading...</span>
   if (!data) return <span>Not found</span>

   return (
      <StyledAppContainer>
         <StyledPlayer
            secondaryMissions={secondaryMissions}
            mainMissions={mainMissions}
            factions={factions}
            missionControllersNumber={3}
            playerInfo={enemyInfo}
         />

         <StyledPlayer
            secondaryMissions={secondaryMissions}
            mainMissions={mainMissions}
            factions={factions}
            missionControllersNumber={3}
            playerInfo={allyInfo}
         />
      </StyledAppContainer>
   )
}

export default App
