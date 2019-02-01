import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000/"
      : "https://protected-scrubland-68099.herokuapp.com"
});

export { api };
