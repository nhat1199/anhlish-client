import HomePage from 'pages/HomePage';
import { ReadingPage, VocabularyPage } from 'pages/Learning/index';
import ListFlashCard from 'pages/Learning/VocabularyPage/ListFlashCard';
const HOME_LINK = '/home';
const LEARNING_LINK = '/learning';

const learningLink = {
	readingLink: LEARNING_LINK + '/reading',
	vocabularyLink: LEARNING_LINK + '/vocabulary',
	setsCard: LEARNING_LINK + '/sets/:id',
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
	{
		name: 'Sets Card',
		link: learningLink.setsCard,
		component: ListFlashCard,
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
