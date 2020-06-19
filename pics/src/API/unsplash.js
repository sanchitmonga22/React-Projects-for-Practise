import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 94bCdz16upehpvjJiHIxpARqCDMw77je5hXCav4RbAs",
    },
});
