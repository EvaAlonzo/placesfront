import { api } from "./api";
import { internalServerError, successStatus } from "../utils/clearres";


//login
export function login(credentials) {
    return api //user data
        .post("/auth/login", credentials)
        .then(successStatus)
        .catch(internalServerError);
};

export function getLoggedIn() {
    return api
        .get(`/auth/getuser`)
        .then(successStatus)
        .catch(internalServerError);
};

//signup
export function signup(credentials) {
    return api
        .post("/auth/signup", credentials)
        .then(successStatus)
        .catch(internalServerError);
};

//logout
export function logout() {
    return api
        .delete("/auth/logout")
        .then(successStatus)
        .catch(internalServerError);
};
