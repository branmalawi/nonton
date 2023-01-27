import Home from '../views/pages/home';
import Watchlist from '../views/pages/watchlist';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/watchlist': Watchlist,
  '/favorite': Favorite,
  '/detail/:verb/:id': Detail,
  '/search/:verb/:id': Search,
  // '/detail/:id': detail,
};

export default routes;
