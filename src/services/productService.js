import { collection, getDocs } from "firebase/firestore"
import database from "./firebase"

export const getProducts = async () => {
    try{
        const response = await fetch('/api/products.json',
            {
                method: 'GET'
            }
        )
        const data = await response.json()
        return data
        
    }catch(error){
        console.error('Error al obtener productos: ', error)
        return null
    }    
}

export const getProductById = async (id) => {
    try{
        const response = await fetch('/api/products.json',
            {
                method: 'GET'
            }
        )
        const data = await response.json()
    
        return data.find((producto) => producto.id == id)
        
    }catch(error){
        console.error('Error al obtener producto: ', error)
        return null
    }     
}

export const getProductsFireBase = async () => {
    try{
        const productsReference = collection(database, 'productos')
        const result = await getDocs(productsReference)

        const productsFormatted = result.docs.map(
            (document) => {
                return {
                    id: document.id,
                    ...document.data()
                }
            }
        )
        return productsFormatted

    } catch (error){
        console.error('error al obtener productos: ', error)
        return null 
    }
}

export const getProductByIdFireBase = async (id ) => {
    const products = await getProductsFireBase()
    return products.find((product) => product.id == id)
}


