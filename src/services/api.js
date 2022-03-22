import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";
//si la app ya esta en produccion colocar la ruta de mi backend hostead
const baseURL = isProduction
  ? "https://iciplaces.herokuapp.com/api"
  : "http://localhost:5005/api";

export const api = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000,
});