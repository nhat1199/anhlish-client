import HomePage from 'pages/HomePage';
import { ImportContentPage, LearnByHeartPage } from 'pages/Learning/index';
const HOME_LINK = '/home';
const LEARNING_LINK = '/learning';

const learningLink = {
	ImportContent: LEARNING_LINK + '/import-content',
	LearnByHeart: LEARNING_LINK + '/learn-by-heart',
};
const learningComponentGroup = [
	{
		name: 'Import Content',
		link: learningLink.ImportContent,
		component: ImportContentPage,
	},
	{
		name: 'Learn by heart',
		link: learningLink.LearnByHeart,
		component: LearnByHeartPage,
	},
];

let routerList = [{ name: 'Home', link: HOME_LINK, component: HomePage }];

const routes = {
	routerLink: () => {
		routerList = routerList.concat(learningComponentGroup);
		return routerList;
	},
};
export { HOME_LINK, LEARNING_LINK, learningLink };
export default routes;
