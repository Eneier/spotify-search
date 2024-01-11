import {getToken} from "../auth/auth";
import { useState, useEffect } from "react";
import {IToken} from "../components/Search/SearchInput";

export const useToken = (): IToken | null => {
    const [token, setToken] = useState<IToken | null>(null);

    useEffect(() => {
        fetchAuthToken();
    }, []);

    const  fetchAuthToken =  async (): Promise<void> => {
        const storedToken = localStorage.getItem('access_token');
        const expiration = localStorage.getItem('token_expiration');
        if (storedToken && expiration) {
            const expirationTime = Number(expiration);
            const currentTime = Date.now();
            if (currentTime < expirationTime) {
                setToken({access_token: storedToken});
            } else {
                const authToken = await getToken();
                setToken(authToken);
            }
        } else {
            const authToken = await getToken();
            setToken(authToken);
        }
    }
        return token
}