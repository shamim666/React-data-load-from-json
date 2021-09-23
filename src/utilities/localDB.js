const addDB = id => {
    const exists = localStorage.getItem(id)
    console.log(exists);
   if(!exists){
    localStorage.setItem(id , 1);
   }
    else{

        localStorage.setItem(id , parseInt(exists)+1)
    }
}


export {addDB} 