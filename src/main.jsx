import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, gql, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
   link: new HttpLink({
      uri: 'http://localhost:4000/',
   }),
   cache: new InMemoryCache()
})



ReactDOM.createRoot(document.getElementById('root')).render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>,
)
