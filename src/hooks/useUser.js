import { useEffect, useState } from "react";
import useToken from "./useToken";

const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = (token) => {
        try {
            const encodedPayload = token.split('.')[1];
            return JSON.parse(atob(encodedPayload));
        } catch (err) {
            console.error("Invalid token:", err);
            return null;
        }
    };
    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });
    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
};

export default useUser;