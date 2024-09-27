'use client'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ReactNode } from 'react'

type ProvidersProp = {
    children: ReactNode,
}

export default function Providers({children}: ProvidersProp){

    const graphqlURI = 'http://localhost:1337/graphql'

    const apolloClient = new ApolloClient({
        uri: graphqlURI,
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    )

}