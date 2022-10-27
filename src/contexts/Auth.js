import { useState, createContext, useContext } from "react";
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [userEmail, setUserEmail] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userRol, setUserRol] = useState(null);
    const [token, setToken] = useState(null);
    const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

    const login = (email, password, callback) => {
        console.info("Haciendo login");
        axios.post('http://localhost:8080/v1/auth', {
            email: email, 
            password: password
        })
        .then(function (response) {
            console.log(response.data);
            setUserEmail(email);
            setToken(response.data.token);
            setTokenExpirationDate(response.data.expirationDate);
            return response;
        })
        .then(function (data) {
            console.log("userEmail: " + userEmail + " -> token: " + token + " -> expirationDate: " + tokenExpirationDate);
            console.info("User Login");
            callback()
            return data;
        })
        .then(function (data) {
            let url = 'http://localhost:8080/api/v1/user/getUserByEmail/'+email
            let headers = {"Authorization": 'Bearer ' + data.data.token};
            console.log("url", url, "headers", headers, "token", data.data.token, "data", data);
            axios.get(url, {headers:headers})
                .then(function (response) {
                    console.log(response.data);
                    setUserName(response.data.name);
                    setUserId(response.data.id);
                    setUserRol(response.data.rol);
                })
                .catch(function (error) {
                    console.log("Error:", error);
                    alert("Falló la copia de los datos del usuario");
                });
        })
        .catch(function (error) {
            console.log("Error:", error);
            alert("Login incorrecto...\n Por favor inténtelo de nuevo");
        });
    }

    const logout = () => {
        console.info("User Logout");
        setUserEmail(null);
        setToken(null);
        setTokenExpirationDate(null);
    }

    return (
        <AuthContext.Provider value={{userEmail, userName, userId, userRol, token, tokenExpirationDate, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}