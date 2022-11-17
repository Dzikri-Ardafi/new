import { openDB } from "idb";
import Config from "../service/globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = Config;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: "id",
    });
  },
});

const FavoriteRestIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async allData() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestauranToFavorite(_restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, _restaurant);
  },

  async deleteRestauranFromFavorite(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestIdb;
