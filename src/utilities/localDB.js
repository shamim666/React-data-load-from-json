
// add purchased item to local storage as a single item 
// const addDB = id => {
//     const exists = localStorage.getItem(id)

//    if(!exists){
//     localStorage.setItem(id , 1);
//    }
//     else{

//         localStorage.setItem(id , parseInt(exists)+1)
//     }
// }


// add purchased item to local storage as a object

const addDB = id => {

    const exist = localStorage.getItem('cart');
    let cart = {};
    if (!exist) {
        cart[id] = 1;
    }
    else {

        cart = JSON.parse(exist)
        if (!cart[id]) {
            cart[id] = 1
        }
        else {
            cart[id] = cart[id] + 1
        }

    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeDB = (id) => {

    const exist = localStorage.getItem('cart');

    if(!exist){

    }

    else {
        const cart = JSON.parse(exist)
        delete cart[id] ; 
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    
}






export { addDB , removeDB }