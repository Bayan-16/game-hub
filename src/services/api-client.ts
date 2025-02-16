import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "490cb122778048f3a04caafa544d42f8",
  },
});
