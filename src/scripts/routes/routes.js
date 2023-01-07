import Home from '../views/pages/home';
import List from '../views/pages/list';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/list': List,
  '/favorite': Favorite,
  // '/detail/:id': detail,
};

export default routes;
