/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import DrawerInitiator from '../utils/drawerInitiator';
import HideNavbar from '../utils/hideNavbar';
import BottomBarController from '../utils/bottombar-control';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ navbar, buttonOpenDrawer, appDrawer, darkSwitch, menuButton, content, overlay, bottombarMenus }) {
    this.navbar = navbar;
    this.buttonOpenDrawer = buttonOpenDrawer;
    this.appDrawer = appDrawer;
    this.darkSwitch = darkSwitch;
    this.menuButton = menuButton;
    this.content = content;
    this.overlay = overlay;
    this.bottombarMenus = bottombarMenus;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      buttonOpenDrawer: this.buttonOpenDrawer,
      appDrawer: this.appDrawer,
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
    // this.content.innerHTML = await page.render();
    // await page.afterRender();
  }
}

export default App;
