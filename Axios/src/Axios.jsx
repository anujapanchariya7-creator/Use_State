import axios from "axios";

const instance = axios.create({
  baseURL: "https://axios-3a269-default-rtdb.firebaseio.com/",
});

export default instance;
