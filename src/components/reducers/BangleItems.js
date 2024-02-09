import { ADD_PRODUCT, UPDATE_CART, CHANGE_LOGIN_STATUS, ADD_SINGLEQUANTITY, ADD_QUANTITY, ADD_TO_CART, SUB_QUANTITY, REMOVE_ITEM, TRYATHOME_STATE, ADD_TO_TRYOUTCART } from '../actions/action-types/cart-actions';
import { MenuItems } from '../Navbar/MenuItems';
import axios from 'axios';
let allproducts = {};
MenuItems.map((item, key) => {
    if (item.types)
        item.types.map((type, key) => {
            item[type.name.replaceAll(' ', '')].map((product, key) => {
                let currentproduct = { ...product, path: item.path + '/' + type.name + '/' + product.name };
                allproducts.push(currentproduct)
           return currentproduct;
            })
            return 0;
        })
return 0;
})
const initState = {
    items: MenuItems,
    allItems: allproducts,
    addedItems: [],
    total: 0,
    totalQuantity: 0,
    currentproduct: {},
    totalDiscount: 0,
    userid: '',
    password: '',
    email:'',
    dob:new Date(),
    address:'',
    tryoutcart:[]

}
const BangleItems = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem;
        state.items.filter(subtype => subtype.types).map((maintype) => {
            maintype.types.map((subtype) => {
                maintype[subtype.name.replaceAll(' ', '')].map((product) => {
                    if (action.name === product.name)
                        addedItem = product;
                        return 0;
                    })
            return 0;
            })
            return 0;
        })
        if (addedItem !== undefined) {

            state.totalQuantity += 1
            var userid = state.userid;
            var totalQuantity = state.totalQuantity;
            let existed_item = state.addedItems.find(item => action.name === item.name)
            var cart;
            var total;
            var totalDiscount;
            if (existed_item) {
                addedItem.quantity += 1;
                cart = state.addedItems;
                total = state.total + addedItem.price - (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100);
                totalDiscount = (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100);
                axios.post('/updatecart', {
                    userid, cart, total, totalQuantity, totalDiscount
                })
                return {
                    ...state,
                    total: state.total + addedItem.price - (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100),
                    totalDiscount: (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100)
                }
            }
            else {
                addedItem.quantity = 1;
                let discountedprice = addedItem.price - (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100);
                let newTotal = state.total + discountedprice
                cart = [...state.addedItems, addedItem];
                total = state.total + addedItem.price - (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100);
                totalDiscount = (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100);
                axios.post('/updatecart', {
                    userid, cart, total, totalQuantity, totalDiscount
                })
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    totalDiscount: (addedItem.price * (addedItem.discount?addedItem.discount:0) / 100),
                    total: newTotal
                }

            }

        }
    }
    else if (action.type === ADD_PRODUCT) {
        return {
            ...state,
            currentproduct: action.product
        }
    }
    else if (action.type === ADD_QUANTITY) {
        state.addedItems.filter(product => { return product.name === action.name }).map(product => {
            state.totalQuantity = state.totalQuantity - product.quantity + action.quantity;
            let discountedprice = product.price - (product.price * (product.discount?product.discount:0) / 100);
            state.totalDiscount += product.quantity * (product.price *(product.discount?product.discount:0) / 100);
            state.total = state.total - (product.quantity * discountedprice) + (action.quantity * discountedprice);
            product.quantity = action.quantity;
            return 0;
        })
        userid=state.userid;
        cart=state.addedItems
        total=state.total;
        totalQuantity=state.totalQuantity;
        totalDiscount=state.totalDiscount;
        axios.post('/updatecart', {
            userid,cart,total,totalQuantity,totalDiscount
        })
        return { ...state }
    }
    else if (action.type === SUB_QUANTITY) {
        state.addedItems.filter(product => { return product.name === action.name }).map(product => {
            if (product.quantity > 1) {
                state.totalQuantity -= 1;
                let discountedprice = product.price - (product.price *(product.discount?product.discount:0) / 100);
                state.totalDiscount -= (product.price *(product.discount?product.discount:0) / 100);
                state.total -= discountedprice;
                product.quantity -= 1;
                var userid=state.userid;
                var cart=state.addedItems
                var total=state.total;
                var totalQuantity=state.totalQuantity;
                var totalDiscount=state.totalDiscount;
                axios.post('/updatecart', {
                    userid,cart,total,totalQuantity,totalDiscount
                })
            }
            return 0;
        })
        return { ...state }
    }
    else if (action.type === ADD_SINGLEQUANTITY) {
        state.addedItems.filter(product => { return product.name === action.name }).map(product => {
            if (product.quantity < 10) {
                state.totalQuantity += 1;
                let discountedprice = product.price - (product.price * (product.discount?product.discount:0) / 100)
                state.totalDiscount += (product.price * (product.discount?product.discount:0) / 100);
                state.total += discountedprice;
                product.quantity += 1;
                userid=state.userid;
                cart=state.addedItems
                total=state.total;
                totalQuantity=state.totalQuantity;
                totalDiscount=state.totalDiscount;
                axios.post('/updatecart', {
                    userid,cart,total,totalQuantity,totalDiscount
                })
            }
            return 0;
        })
       
        return { ...state }
    }
    else if (action.type === REMOVE_ITEM) {
        if(action.cartname==='addtocart'){
        state.totalDiscount = 0;
        state.totalQuantity = 0;
        state.total = 0;
        let addedItems = state.addedItems.filter(product => { return product.name !== action.name })
        addedItems.map((product, index) => {
            state.totalDiscount += (product.price * (product.discount?product.discount:0) / 100) * product.quantity;
            state.totalQuantity += product.quantity;
            state.total += (product.quantity * product.price - (product.price * (product.discount?product.discount:0) / 100) * product.quantity);
            return 0;
        })
        state.addedItems = addedItems;
        userid=state.userid;
        cart=state.addedItems
        total=state.total;
        totalQuantity=state.totalQuantity;
        totalDiscount=state.totalDiscount;
        axios.post('/updatecart', {
            userid,cart,total,totalQuantity,totalDiscount
        })
        }
        else{
            let addedItems = state.tryoutcart.filter(product => { return product.name !== action.name })
            state.tryoutcart= addedItems;
        }
        
        return { ...state }
    }
    else if (action.type === UPDATE_CART) {
        return {
            ...state,
            addedItems: action.addedItems,
            total: action.total,
            totalQuantity: action.totalQuantity,
            totalDiscount: action.totalDiscount,

        }
    }
    else if (action.type === CHANGE_LOGIN_STATUS) {
        return {
            ...state,
            userid: action.userid,
            password: action.password
        }
    }
    else if(action.type === TRYATHOME_STATE)
    {
        return{
            ...state,
            email: action.email,
            dob:action.dob,
            address:action.address
        }
    }
    if (action.type ===ADD_TO_TRYOUTCART) {
        let addedItem;
        state.items.filter(subtype => subtype.types).map((maintype) => {
            maintype.types.map((subtype) => {
                maintype[subtype.name.replaceAll(' ', '')].map((product) => {
                    if (action.name === product.name)
                        addedItem = product;
                return 0
                    })
                return 0
            })
            return 0
        })
        if (addedItem !== undefined) {
            let existed_item = state.tryoutcart.find(item => action.name === item.name)
            if (existed_item) {
                cart = state.tryoutcart;
                // const { data } = axios.post('/updatetryoutcart', {
                //    cart
                // })
                return {
                    ...state,
                }
            }
            else {
                cart = [...state.tryoutcart, addedItem];
                // const { data } = axios.post('/updatetryoutcart', {
                //     cart
                // })
                return {
                    ...state,
                    tryoutcart: [...state.tryoutcart, addedItem]
                }

            }

        }
    }
    else {
        return state
    }
}

export default BangleItems
