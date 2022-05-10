import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { createContext } from 'react';

export default function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
    });

    return user;
}

export const CurrentUserContext = createContext({});

interface Props {
    children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
    return (
        <CurrentUserContext.Provider value={{ user: useAuth() }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
