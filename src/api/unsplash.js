import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: "Client-ID e3377250fc2bb7687c8afb8ee9d8218fafb4d402ade5f2a5cf6ea8f74d0561e4"}
});