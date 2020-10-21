import HomePage from 'pages/HomePage';
import { ReadingPage, VocabularyPage } from 'pages/Learning/index';
const HOME_LINK = '/home';
const LEARNING_LINK = '/learning';

const learningLink = {
	readingLink: LEARNING_LINK + '/reading',
	vocabularyLink: LEARNING_LINK + '/vocabulary',
};
const learningComponentGroup = [
	{
		name: 'Reading Page',
		link: learningLink.readingLink,
		component: ReadingPage,
	},
	{
		name: 'Vocabulary',
		link: learningLink.vocabularyLink,
		component: VocabularyPage,
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
