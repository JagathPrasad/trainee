import { createContext,useState } from 'react';

export const UserContext = createContext();



const UserWrapper = ({ children }) => {
    console.log('user wrapper');
    const [user, setUser] = useState(false);


    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserWrapper;