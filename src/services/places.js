import { internalServerError, successStatus } from "../utils/clearres";
import { api } from "./api";

export function placesList(){
    return api
    .get("/places/enlistplaces")
    .then(successStatus)
    .catch(internalServerError)
}

export function createPlaces(){
    return api
    .get("/places/createplaces")
    .then(successStatus)
    .catch(internalServerError)
}