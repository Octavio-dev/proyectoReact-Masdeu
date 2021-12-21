import React, { createContext, useState, useEffect } from "react";

//Firebase
import { db } from "./firebase/firebaseConfig";
import {collection, query, getDocs} from "firebase/firestore"

export const ItemContext = createContext()

export const ItemProvider = ({children}) => {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        
       const getProducts = async () => {
           const q = query(collection(db,"guitarras"))
           let docs = []
           const querySnapshot = await getDocs(q)

           querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})       
           })

           setProductos(docs)
       }
       getProducts()

    }, [])

    return(
        <ItemContext.Provider value={[productos, setProductos]}>
            {children}
        </ItemContext.Provider>
    )

}

