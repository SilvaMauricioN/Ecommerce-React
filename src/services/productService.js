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
