import { internalServerError, successStatus } from "../utils/clearres";
import { api } from "./api";

export function uploadCloud(getImage){
    return api
    .post("/upload", getImage)
    .then(successStatus)
    .catch(internalServerError)
}
