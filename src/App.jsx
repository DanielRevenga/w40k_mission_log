import "./App.css"
import { StyledMissionController } from "./components/styles/MissionController.styled"
import { StyledAppContainer } from "./components/styles/AppContainer.styled"
import { StyledCommandPointsController } from "./components/styles/CommandPointsController.styled"


function App() {


   return (
      <StyledAppContainer>
         <div>
            <StyledCommandPointsController />

            <StyledMissionController />
            <StyledMissionController />
            <StyledMissionController />
         </div>

         <div>
            <StyledCommandPointsController />

            <StyledMissionController />
            <StyledMissionController />
            <StyledMissionController />
         </div>
      </StyledAppContainer>
   )
}

export default App
