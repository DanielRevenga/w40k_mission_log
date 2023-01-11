import { gql } from "@apollo/client"

export const ENEMY_INFO_UPDATE_SELECT = gql`
mutation enemyInfo_update(
   $id: Int!,
   $name: String,
   $secondaryMission_1: Int,
   $secondaryMission_2: Int,
   $secondaryMission_3: Int,
   $mainMission: Int,
   $commandPoints: Int,
   $faction: Int
){
   enemyInfo_update(
      id: $id,
      name: $name,
      secondaryMission_1: $secondaryMission_1,
      secondaryMission_2: $secondaryMission_2,
      secondaryMission_3: $secondaryMission_3,
      mainMission: $mainMission,
      commandPoints: $commandPoints,
      faction: $faction
   ) {
      id,
      name,
      secondaryMission_1,
      secondaryMission_2,
      secondaryMission_3,
      mainMission,
      commandPoints,
      faction,
   }
}
`

export const ALLY_INFO_UPDATE_SELECT = gql`
mutation allyInfo_update(
   $id: Int!,
   $name: String,
   $secondaryMission_1: Int,
   $secondaryMission_2: Int,
   $secondaryMission_3: Int,
   $mainMission: Int,
   $commandPoints: Int,
   $faction: Int
){
   allyInfo_update(
      id: $id,
      name: $name,
      secondaryMission_1: $secondaryMission_1,
      secondaryMission_2: $secondaryMission_2,
      secondaryMission_3: $secondaryMission_3,
      mainMission: $mainMission,
      commandPoints: $commandPoints,
      faction: $faction
   ) {
      id,
      name,
      secondaryMission_1,
      secondaryMission_2,
      secondaryMission_3,
      mainMission,
      commandPoints,
      faction,
   }
}
`
