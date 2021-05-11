export const initialState = {
    cartData : [],
    jsonData: []
}

export const getCartTotal = (cartData)=>{
        let i;
        let totalPrice = 0;
        for(i=0; i<cartData.length; i++){
            totalPrice += parseInt(cartData[i].price)
        }
    }
    

const cartReducers = (state=initialState, action) =>{
    switch (action.type){
        case 'GET_DATA':
            return{
                ...state,
                jsonData: action.payload
            }

        case 'ADD_TO_CART':
            console.log(action);
            return {
                ...state,
                cartData: [...state.cartData , action.item] 
            }
        case 'REMOVE_FROM_CART':
            const index = state.cartData.findIndex((cartItem)=> cartItem.id === action.id);
            let newCart = [...state.cartData];
    
            if(index>=0){
                newCart.splice(index, 1);
            }else{
                console.warn(`Cannot remove product as (id: ${action.id}) is not in cartData`)
            }
    
            return{
                ...state,
                cartData: newCart
            }
        
        default :
            return state;
    }
}

const jsonDataReducers = (state=initialState, action) =>{
    switch (action.type){
        case 'ADD_DATA':
            return{
                ...state,
                jsonData: [...state.jsonData , action.dataItems]
            }
        
        default :
            return state;
    }
}

export {cartReducers, jsonDataReducers};