import Config from "./config";

const API_Endpoint = {
  HomePage: Config.API_URL + "/list",
  DetailPage: (id) => `${Config.API_URL}/detail/${id}`,
};
export default API_Endpoint;
