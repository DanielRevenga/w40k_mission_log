import { gql } from "@apollo/client"

export const GET_ALL_INIT_QUERIES = gql`
   query {
      secondaryMissions_getAll {
         id,
         name,
         description,
         category,
         selected,
         faction
      }

      mainMissions_getAll {
         id,
         name,
         number,
         description,
      }

      factions_getAll {
         id,
         name
      }

      enemyInfo_getAll {
         id,
         secondaryMission_1,
         secondaryMission_2,
         secondaryMission_3,
         mainMission,
         faction,
         name,
         commandPoints,
         enemy
      }

      allyInfo_getAll {
         id,
         secondaryMission_1,
         secondaryMission_2,
         secondaryMission_3,
         mainMission,
         faction,
         name,
         commandPoints,
         enemy
      }
   }
`

export const ENEMY_INFO_GETALL_QUERY = gql`
   query {
      enemyInfo_getAll {
         id,
         secondaryMission_1,
         secondaryMission_2,
         secondaryMission_3,
         mainMission,
         faction,
         name,
         commandPoints,
         enemy
      }
   }
`

export const ALLY_INFO_GETALL_QUERY = gql`
   query {
      allyInfo_getAll {
         id,
         secondaryMission_1,
         secondaryMission_2,
         secondaryMission_3,
         mainMission,
         faction,
         name,
         commandPoints,
         enemy
      }
   }
`