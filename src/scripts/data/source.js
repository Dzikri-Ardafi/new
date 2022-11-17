import axios from "axios";
import API_Endpoint from "../service/globals/apiEndpoints";

class SourceData {
  static async HomePageData() {
    let dataObj;
    const responses = await axios
      .get(API_Endpoint.HomePage)
      .then((response) => {
        dataObj = response.data.restaurants;
      });
    return dataObj;
  }

  static async DetailPageData(id) {
    let spesifikRestaurant;
    const response = await axios
      .get(API_Endpoint.DetailPage(id))
      .then((res) => {
        spesifikRestaurant = res.data.restaurant;
      });

    return spesifikRestaurant;
  }
}

export default SourceData;
