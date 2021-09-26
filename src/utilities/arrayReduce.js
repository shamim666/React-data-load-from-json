
// reduce method of a Array (to add all the elements of an array)

const cosmetics = [
    { id:0 , name: 'Alta' , price: 1000},
    { id:1 , name: 'Nail Polish' , price: 2000},
    { id:2 , name: 'Eye Line' , price: 3000},
    { id:3 , name: 'Maskara' , price: 4000}
]
    
const reducer = (previous , current ) => previous + current.price 
const totalPrice = cosmetics.reduce(reducer,0)






export {totalPrice}