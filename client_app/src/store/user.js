// import { createContext,useState } from 'react';

// export const UserContext = createContext();

//const storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
//const initialState = { userdetails: storage, ...sumuser(storage)};

// const UserWrapper = ({ children }) => {
//     console.log('user wrapper');
//     const [user, setUser] = useState(false);


//     return (
//         <UserContext.Provider value={{ user, setUser }} >
//             {children}
//         </UserContext.Provider>
//     );
// }

// export default UserWrapper;

import React, { createContext, useReducer } from 'react';
const initialState = {};
const store = createContext(initialState);
const { Provider } = store;
const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {

        console.log('state coming', action.payload.user);
        console.log('state coming', action.type);
        switch (action.type) {
            case 'ADD_USER':
                return { ...state, user: action.payload.user }
            default:
                return state;
        };
    }, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { store, StateProvider }