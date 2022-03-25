import { internalServerError, successStatus } from "../utils/clearres";
import { api } from "./api";

export function placesList(){
    return api
    .get("/places/enlistplaces")
    .then(successStatus)
    .catch(internalServerError)
}

export function createPlaces(fullPlace){
    return api
    .post("/places/createplaces", fullPlace) //este es el payload
    .then(successStatus)
    .catch(internalServerError)
}

export function editPlaces(fullPlace){
    return api
    .post("/places/editplaces", fullPlace) //este es el payload
    .then(successStatus)
    .catch(internalServerError)
}

export function deletePlaces(fullPlace){
    return api
    .post("/places/deleteplaces", fullPlace) //este es el payload
    .then(successStatus)
    .catch(internalServerError)
}