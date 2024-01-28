export const add = data =>{
    return({
        type:'ADD_PRODUCT',
        payload:data
    })
}

export const del = data =>{
    return({
        type:'DEL_PRODUCT',
        payload:data
    })
}