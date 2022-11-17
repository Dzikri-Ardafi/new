import Config from "../../scripts/service/globals/config";

const getRestaurantData = (allData) => {
  return (
    "<div class='data'>" +
    allData
      .map(
        (data) =>
          `
          <div class= "card">
          <img class="imgCard" src="${Config.baseImgURL}medium/${data.pictureId}" alt="${data.name}" />
          <div class="detail">
              <div class="rating">
                  <h3>
                      Rating: ${data.rating}
                  </h3>
              </div>
              <a href='/#/detail/${data.id}'>
              
              <h2>${data.name}</h2>
              </a>

              <p>${data.city}</p>
              <p>${data.description}</p>
          </div>
          </div>
          `
      )
      .join("") +
    "</div>"
  );
};

const noDataPriview = () => {
  return `
            <div class="noDataImg">
            <img
            class="noDataImage"
            src="./images/heros/no_data.png"
            alt=""
          />
            </div>
        `;
};

const dataToPreview = {
  getRestaurantData,
  noDataPriview,
};
export default dataToPreview;
