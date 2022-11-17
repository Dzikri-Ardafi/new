import DetailPage from "../../views/pages/detail";
import HomePage from "../../views/pages/HomePage";
import FavoritePage from "../../views/pages/favorite";
const routes = {
  "/": HomePage,
  "/detail/:id": DetailPage,
  "/favorite": FavoritePage,
};

export default routes;
