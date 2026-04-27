'use client'

import { ReactNode, createContext } from 'react'

import ImageHostContext from './_context/ImageHostContext'
import FSContext, { fs } from './_context/FirebaseContext'

type ProvidersProp = {
    children: ReactNode,
}

const imageHostURL = 'http://localhost:1337';

export default function Providers({children}: ProvidersProp){

    return (
        <ImageHostContext.Provider value={imageHostURL}>
            <FSContext.Provider value={fs}>
                {children}
            </FSContext.Provider>
        </ImageHostContext.Provider>
    )

}