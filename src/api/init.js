import axios from "axios";
const AUTH_TOKEN = "27-ShBiueSPGlqvS7zMzS9nvAB6Pv0";

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

// api.defaults.headers.common["Authorization"] = 'Bearer '+  AUTH_TOKEN;

export { api };


//   const token = "27-ShBiueSPGlqvS7zMzS9nvAB6Pv0";
    //   axios({ method: 'get', url: 'your URL', headers: { Authorization: `Bearer ${token}` } })
// headers: {
//   "Accept": "application/json, text/plain, */*",
//     "Authorization": "Bearer 27-ShBiueSPGlqvS7zMzS9nvAB6Pv0",
//       "Content-Type": "application/json;charset=utf-8"
// }
  // :"http://localhost:3000"
  // headers: { "Authorization": `Bearer ${AUTH_TOKEN}`},

  // headers: { "Content-Type": "application/json" }