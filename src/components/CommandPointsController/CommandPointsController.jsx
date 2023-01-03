import { useState } from "react"
import { StyledAddCounter } from "../styles/AddCounter.styled"
import { StyledShowCounter } from "../styles/ShowCounter.styled"
import { StyledSubstractCounter } from "../styles/SubstractCounter.styled"

export const CommandPointsController = ({ className }) => {

   const [commandPoints, setCommandPoints] = useState(0)

   return (
      <div className={className}>
         <StyledSubstractCounter substractPoints={setCommandPoints} />

         <StyledShowCounter actualCount={commandPoints} rounded />

         <StyledAddCounter addPoints={setCommandPoints} />
      </div>
   )
}
