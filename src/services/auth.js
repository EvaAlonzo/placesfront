import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

function internalServerError(err) {
    if (err.response && err.response.data && err.response.data.errorMessage) {
        return {
        status: false,
        errorMessage: err.response.data.errorMessage,
        };
    }
        return {
        status: false,
        errorMessage: "Internal server error. Please check your server",
    };
};

function successStatus(res) {
    return {
        status: true,
        data: res.data,
    };
};

//basic url for every request file
const authService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
});

//login
export function login(credentials) {
    return authService //user data
        .post("/login", credentials)
        .then(successStatus)
        .catch(internalServerError);
};

export function getLoggedIn() {
    return authService
        .get(`session`, {
        headers: {
            Authorization: USER_HELPERS.getUserToken(),
        },
    })
        .then(successStatus)
        .catch(internalServerError);
};

//signup
export function signup(credentials) {
    return authService
        .post("/signup", credentials)
        .then(successStatus)
        .catch(internalServerError);
};

//logout
export function logout() {
    return authService
        .delete("/logout", {
            headers: {
                Authorization: USER_HELPERS.getUserToken(),
            },
    })
        .then(successStatus)
        .catch(internalServerError);
};
