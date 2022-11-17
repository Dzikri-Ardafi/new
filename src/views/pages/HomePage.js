import SourceData from "../../scripts/data/source";
import dataToPreview from "../../scripts/data/GetAllData";

const HomePage = {
  async render() {
    return `
    <section>
        <div class="jumbotron" id="jumbotron">
          <div class="textJumbotron">
            <h1 style="font-weight: bolder">
              Kami merekomendasikan anda beberapa pilihan Restaurant yang ada
              terdapat pada beberapa kota besar di Indonesia
            </h1>

            <button style="height: auto">
              <a href="#Restaurant-List" style="text-decoration: none">
                <h2 style="font-size: 40px; margin: auto">Pilih Restaurant</h2>
              </a>
            </button>
          </div>
          <!-- destkop -->
          <img
            class="jumbotronImg"
            src="./images/heros/hero-image_2.jpg"
            alt=""
          />
        </div>
      </section>
      <br />

      <!-- items Restaurant -->
      <section id="Restaurant-List">
        <br />
        <div style="padding-left: 0.5em">
          <h1>Rekomendasi Restaurant</h1>
        </div>
        <div class="items" id="items"></div>
      </section>
      <br />`;
  },

  async afterRender() {
    const allDatas = await SourceData.HomePageData();
    const mainDiv = document.getElementById("items");
    mainDiv.innerHTML = dataToPreview.getRestaurantData(allDatas);
  },
};

export default HomePage;
