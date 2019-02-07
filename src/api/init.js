import axios from "axios";


const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://wbgs-server.herokuapp.com"
      : "http://localhost:3000",

      headers:{
        'Authorization': 'Bearer ',
        'cache-control': 'no-cache'
      },
      proxy:false,

});

export { api };