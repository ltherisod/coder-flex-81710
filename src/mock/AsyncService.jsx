const productos = [
    {
        // id:'01', no lo pongo se genera dinamico de firebase
        name:'Random 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:25,
        price: 25000,
        img:'https://picsum.photos/200',
        category:'nuevos'
    },
     {
        id:'02',
        name:'Random 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:15,
        price: 55000,
        img:'../img/boba-fett.png',
        category:'mas vendidos'
    },
  {
        id:'03',
        name:'Random 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:13,
        price: 75000,
        img:'https://i.postimg.cc/Qd3KqnW6/darth-vader.png',
        category:'mas vendidos'
    },
     {
        id:'04',
        name:'Random 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:5,
        price: 45000,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&s',
        category:'ofertas'
    }
]


export const getProductos = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                console.log('el error existe')
                reject('Ups, algo salió mal')
            }else{
                console.log('nO HAY ERROR, SE RESUELVE')
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            //harcodeado
            // resolve(productos[0])
            let prod= productos.find((producto)=> producto.id === id)
            resolve(prod)
        },2000)
    })
}

