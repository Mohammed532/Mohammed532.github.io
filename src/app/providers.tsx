'use client'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ReactNode, createContext } from 'react'

import ImageHostContext from './_context/ImageHostContext'

type ProvidersProp = {
    children: ReactNode,
}

const imageHostURL = 'http://localhost:1337';

export default function Providers({children}: ProvidersProp){

    const graphqlURI = 'http://localhost:1337/graphql'

    const apolloClient = new ApolloClient({
        uri: graphqlURI,
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={apolloClient}>
            <ImageHostContext.Provider value={imageHostURL}>
                {children}
            </ImageHostContext.Provider>
        </ApolloProvider>
    )

}