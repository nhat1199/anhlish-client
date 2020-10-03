import HomePage from "pages/HomePage";
import { ImportContentPage, LearnByHeartPage } from "pages/Learning/index";
const HOME_LINK = "/home";
const LEARNING_LINK = "/learning";

const learningGroup = [
  {
    name: "Import Content",
    link: LEARNING_LINK + "/import-content",
    component: ImportContentPage,
  },
  {
    name: "Learn by heart",
    link: LEARNING_LINK + "/learn-by-heart",
    component: LearnByHeartPage,
  },
];

let routerList = [{ name: "Home", link: HOME_LINK, component: HomePage }];

const routes = {
  routerLink: () => {
    routerList = routerList.concat(learningGroup);
    return routerList;
  },
};

export default routes;
