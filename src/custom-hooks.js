import { useQuery } from "@apollo/client"
import { GET_ALL_INIT_QUERIES } from "./graphql/queries"

const GET_QUERIES = GET_ALL_INIT_QUERIES

export const useInitInfo = () => {
   const result = useQuery(GET_QUERIES)

   return result
}
