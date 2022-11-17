import FavoriteRestIdb from "../idb/favorite-idb";
import { buttonLikeSession, buttonUnlikeSession } from "./likeButton";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, _restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = _restaurant;
    await this._renderButton(this._restaurant);
  },

  async _renderButton() {
    const id = this._restaurant.id;
    if (await this._is_restaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _is_restaurantExist(id) {
    const _restaurant = await FavoriteRestIdb.getRestaurant(id);
    return !!_restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = buttonLikeSession();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestIdb.putRestauranToFavorite(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = buttonUnlikeSession();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestIdb.deleteRestauranFromFavorite(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
