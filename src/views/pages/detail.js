// import UrlParser from "../../scripts/routes/url-parse";
import SourceData from "../../scripts/data/source";
import UrlParser from "../../scripts/routes/url-parse";
import Config from "../../scripts/service/globals/config";
import LikeButtonInitiator from "../../scripts/utils/like-Initiator";

const DetailPage = {
  async render() {
    return `
      <div id="itemSpesifik"></div>
      <div id="comment"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const mainDiv = document.getElementById("itemSpesifik");
    const commentDiv = document.getElementById("comment");
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const spesifikRestaurant = await SourceData.DetailPageData(url.id);
    const menuMinuman = spesifikRestaurant.menus.drinks;
    const menuMakanan = spesifikRestaurant.menus.foods;
    const commentContent = spesifikRestaurant.customerReviews;

    const item = () => {
      return (
        `<div class="spesifikData">
          <div class = 'details'>
            <div>
              <img class="imgDetail" width = "auto" src="${Config.baseImgURL}large/${spesifikRestaurant.pictureId}"></img>
            </div>
            <div class= 'textDetail'>
              <h2>
                ${spesifikRestaurant.name}
              </h2>
              <h4>
                ${spesifikRestaurant.city}, 
                ${spesifikRestaurant.address}
              </h4>
              <p>
                ${spesifikRestaurant.description}
              </p>
              <div id="category">
                <h4>
                  Category : 
                    <span>
                      <ul>` +
        spesifikRestaurant.categories
          .map((categorie) => `<li>${categorie.name}</li>`)
          .join("") +
        `</ul>
                    </span>
                </h4>
              </div>

      <div class = "menus">
              <h4>Menu Makanan
              <span>
                  <ul> ` +
        menuMakanan.map((food) => `<li>${food.name}</li>`).join("") +
        `</ul>
              </span>
            </h4>
          <h4>Menu Minuman
            <span>
                <ul> ` +
        menuMinuman.map((drink) => `<li>${drink.name}</li>`).join("") +
        `</ul>
            </span>
          </h4>
      </div>
            </div>
          </div>
        </div>`
      );
    };
    mainDiv.innerHTML = item();

    const CommentSession = () => {
      return (
        `
        <div class ="box">
          <h2 class="titleSection">Comments</h2>` +
        commentContent
          .map(
            (content) =>
              `
              <div class = "innerBox">
              <h3 class="nameUser">${content.name}</h3>
              <p class = "createdComment">${content.date}<p>
              <h4 class = "commentContent">
                <q>
                  <i>
                    ${content.review}
                  <i>
                </q>
              <h4>
            </div>
            <br>
              `
          )
          .join("") +
        `
           
        </div>
   `
      );
    };

    commentDiv.innerHTML = CommentSession();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      _restaurant: {
        id: spesifikRestaurant.id,
        description: spesifikRestaurant.description,
        name: spesifikRestaurant.name,
        city: spesifikRestaurant.city,
        pictureId: spesifikRestaurant.pictureId,
        rating: spesifikRestaurant.rating,
      },
    });
  },
};

export default DetailPage;
