import { createContext,useState,useReducer } from 'react';
import { UserReducer, sumuser } from './userReducer'

export const UserContext = createContext();

const storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
const initialState = { userdetails: storage, ...sumuser(storage)};

const UserWrapper = ({ children }) => {
    console.log('user wrapper');
    const [user, setUser] = useState(false);
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const addUser = payload =>  dispatch({type: 'ADD_USER', payload})

    const update = payload => dispatch({type: 'UPDATE', payload, isValid: true})

    const contextValues = {
        addUser,
        update,
       ...state
    }


    return (
        <UserContext.Provider value={{ user, setUser,contextValues }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserWrapper;