import { internalServerError, successStatus } from "../utils/clearres";
import { api } from "./api";

export function detailUser(){
    return api
    .get("/profile/detailUser")
    .then(successStatus)
    .catch(internalServerError)
};

export function editUser(fullUser){
    return api
    .put("/profile/edituser",fullUser)
    .then(successStatus)
    .catch(internalServerError)
}