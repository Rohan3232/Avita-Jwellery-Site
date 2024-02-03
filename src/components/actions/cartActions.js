import { ADD_TO_CART,UPDATE_CART,CHANGE_LOGIN_STATUS,ADD_SINGLEQUANTITY,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,ADD_PRODUCT, TRYATHOME_STATE, ADD_TO_TRYOUTCART} from './action-types/cart-actions'

//add cart action
export const addToCart= (name)=>{
    return{
        type: ADD_TO_CART,
        name
    }
}
export const updateCart=(addedItems,total,totalQuantity,totalDiscount)=>{
    return{
        type:UPDATE_CART,
        addedItems,
        total,
        totalQuantity,
        totalDiscount
    }
}
//remove item action
export const removeItem=(name,cartname)=>{
    return{
        type: REMOVE_ITEM,
        name,
        cartname
    }
}
//subtract qt action
export const subtractQuantity=(name)=>{
    return{
        type: SUB_QUANTITY,
        name
    }
}
export const addQuantity=(name,quantity)=>{
    return{
        type: ADD_QUANTITY,
        name,
        quantity
    }
}
export const addSingleQuantity=(name)=>{
    return{
        type: ADD_SINGLEQUANTITY,
        name
    }
}
//add qt action
export const addShipping=(id)=>{
    return{
        type: ADD_SHIPPING,
        id
    }
}

export const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        product
    }
}

export const changeLoginStatus=(userid,password)=>{
    return{
        type:CHANGE_LOGIN_STATUS,
        userid,
        password
    }
}
export const tryathomestate=(tryathome)=>{
    return{
        type:TRYATHOME_STATE,
        tryathome
    }
}
export const addtotryoutcart=(name)=>{
    return{
        type:ADD_TO_TRYOUTCART,
        name
    }
}
