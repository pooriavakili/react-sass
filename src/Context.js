import React,{createContext} from 'react'
export const ketab=createContext();
export default function KetabProvider(props) {
    return(
    <ketab.Provider>
        {props.children}
    </ketab.Provider>
    )
}