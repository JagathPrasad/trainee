const Storage = (userdetails) => {
    localStorage.setItem('user', JSON.stringify(userdetails.length > 0 ? userdetails: []));
}

export const sumuser = userdetails => {
    Storage(userdetails);
    
}

export const UserReducer = (state, action) => {
    switch (action.type) {
       case "ADD_USER":
            if (!state.userdetails.find(user => user.id === action.payload.id)) {
                state.userdetails.push({
                    ...action.payload,
                    quantity: 1
                })
            } 
            return {
                ...state,
                //...sumItems(state.cartItems),
                userdetails: [...state.userdetails]
            }
        case "UPDATE":
        if(action.isValid) {
            action.isValid= false
            state.userdetails[state.userdetails.findIndex(user => user.id === action.payload.id )].quantity++
            
        }
        return {
            ...state,
            //...sumItems(state.cartItems),
            userdetails: [...state.userdetails]
        }
        default:
            return state

    }
}