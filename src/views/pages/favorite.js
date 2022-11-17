import FavoriteRestIdb from "../../scripts/idb/favorite-idb";
import dataToPreview from "../../scripts/data/GetAllData";

const FavoritePage = {
  async render() {
    return `
            <div class = "favoriteContent">
            <div class="title-page">

            <h1> Restaurant Favorite </h1>
            </div>
              <div id ="contentFavorite" class ="contentcontentFavorite">
             
              </div>
            </div>
        `;
  },

  async afterRender() {
    const allDataFavorite = await FavoriteRestIdb.allData();
    const divFavorite = document.querySelector("#contentFavorite");
    if (!allDataFavorite.length) {
      divFavorite.innerHTML = dataToPreview.noDataPriview();
    } else {
      divFavorite.innerHTML = dataToPreview.getRestaurantData(allDataFavorite);
    }
  },
};

export default FavoritePage;
