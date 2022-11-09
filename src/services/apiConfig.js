import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://ec-blog-app-server.herokuapp.com",
  development: "https://ec-blog-app-server.herokuapp.com",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

console.log(api);

export default api;
