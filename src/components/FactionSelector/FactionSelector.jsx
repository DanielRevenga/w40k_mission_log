import { useEffect, useState } from "react"

export const FactionSelector = ({ className, factions, setFaction }) => {

   const [actualFactions, setActualFactions] = useState(null)

   useEffect(() => {
      setActualFactions(factions)
   }, [factions])

   const onChangeFactionSelectorHandler = (event) => {
      const newFaction = event.target.value
      const selectedFaction = actualFactions.find(faction => faction.id === Number(newFaction))
      setFaction(selectedFaction)
   }

   return (
      <select
         className={className}
         name="faction_selector"
         id="faction_selector"
         onChange={onChangeFactionSelectorHandler}
      >
         {
            !actualFactions
               ? <option value="-1">Loading...</option>
               : actualFactions.map((faction, index) => {
                  return (
                     <option
                        value={`${faction.id}`}
                        key={`faction_${faction.id}_${index}`}
                     >
                        {faction.name}
                     </option>
                  )
               })
         }
      </select>
   )
}
