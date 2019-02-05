import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://protected-scrubland-68099.herokuapp.com"
      : "http://localhost:3000",
  // :"http://localhost:3000"

  headers: { "Content-Type": "application/json" }
});

export { api };
