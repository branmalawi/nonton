/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import SearchInitiator from '../utils/searchInitiator';
import SearchResultPresenter from '../utils/search-result-presenter';
import DrawerInitiator from '../utils/drawerInitiator';
// import InitialColorImage from '../utils/initialColorImage';
import HideNavbar from '../utils/hideNavbar';
import BottomBarController from '../utils/bottombar-control';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ body, navbar, buttonOpenDrawer, searchContainer, searchForm, searchbar, searchResult, btnsubmitandclose, btnOpenSearchbar, appDrawer, btnMenuAppDrawer, content, overlay, bottombarMenus }) {
    this.body = body;
    this.navbar = navbar;
    this.buttonOpenDrawer = buttonOpenDrawer;
    this.searchContainer = searchContainer;
    this.searchForm = searchForm;
    this.searchbar = searchbar;
    this.searchResult = searchResult;
    this.btnsubmitandclose = btnsubmitandclose;
    this.btnOpenSearchbar = btnOpenSearchbar;
    this.appDrawer = appDrawer;
    this.btnMenuAppDrawer = btnMenuAppDrawer;
    this.content = content;
    this.overlay = overlay;
    this.bottombarMenus = bottombarMenus;

    this.initialAppShell();
  }

  initialAppShell() {
    SearchInitiator.init({
      body: this.body,
      searchContainer: this.searchContainer,
      searchForm: this.searchForm,
      searchbar: this.searchbar,
      navbar: this.navbar,
      btnOpenSearch: this.btnOpenSearchbar,
      btnSubmitandClose: this.btnsubmitandclose,
    });

    // InitialColorImage.init({
    //   main: this.content,
    // });

    SearchResultPresenter.init({
      searchContainer: this.searchContainer,
      searchForm: this.searchForm,
      searchbar: this.searchbar,
      searchResult: this.searchResult,
    });

    DrawerInitiator.init({
      buttonOpenDrawer: this.buttonOpenDrawer,
      appDrawer: this.appDrawer,
      btnMenuAppDrawer: this.btnMenuAppDrawer,
      overlay: this.overlay,
    });

    HideNavbar.init({
      navbar: this.navbar,
    });

    BottomBarController.init({
      buttonMenus: this.bottombarMenus,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
