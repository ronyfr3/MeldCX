import axios from "axios";
const url = "http://35.201.2.209:8000";
export const getDevices = () => axios.get(`${url}/devices`);
