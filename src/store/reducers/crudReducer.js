const initState={
    crud:[{
        id:1,
        product_name:'Mac Book air',
        color:'White',
        category:'Laptop',
        price:2000
    }]
}

const curdReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case "ADD_PRODUCT":
            return {
                ...state,
                crud:[...state.crud, payload]
            }    
        case "DEL_PRODUCT":
            return{
                ...state,
                crud:state.crud.filter(curd=>curd.id!=payload)
            }   
        default:
            return {
                ...state
            }
    }
}

export default curdReducer;