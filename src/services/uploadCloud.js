import { internalServerError, successStatus } from "../utils/clearres";
import { api } from "./api";

export function uploadCloud(){
    return api
    .get("/upload")
    .then(successStatus)
    .catch(internalServerError)
}