export const initialState = {
    cartData : []
}

export const getCartTotal = (cartData)=>{
        let i;
        let totalPrice = 0;
        for(i=0; i<cartData.length; i++){
            totalPrice += parseInt(cartData[i].price)
        }
    }
    

const reducer = (state=initialState, action) =>{
    switch (action.type){
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

export default reducer;