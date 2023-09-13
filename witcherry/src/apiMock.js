const products = [
    {id:'1', name:'Remera bordada', price:'950', category:'remeras', img:'https://media.istockphoto.com/id/1151955707/es/foto/plantilla-de-camiseta-negra-de-hombre-en-blanco-de-dos-lados-de-forma-natural-en-maniqu%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Eddyot5nGcfb1NZsORpkWi67PwNotldB51vK7z1lrBo=', stock:'15', description: 'Remera con bordado personalizado'},
    {id:'2', name:'Buzo bordado', price:'1400', category:'buzos', img:'https://cdn.pixabay.com/photo/2016/10/27/09/23/man-1773720_1280.jpg', stock:'6', description: 'Buzo con bordado personalizado'},
    {id:'3', name:'Buzo simple', price:'1900', category:'buzos', img:'https://media.istockphoto.com/id/1178380520/es/foto/plantilla-de-sudadera-blanca-en-blanco-para-hombre-de-dos-lados-forma-natural-en-maniqu%C3%AD.jpg?s=2048x2048&w=is&k=20&c=RoOBbUoJlWF5Yajuq3jL8tBHce9-GRF5EOiPg2KVYFg=', stock:'12', description: 'Buzo liso de excelente calidad'},
    // {id:'', name:'', price:'', category:'', img:'', stock:'', description: ''},
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === categoryId))
        }, 500);
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => products.category === categoryId))
        }, timeout);
    })
}