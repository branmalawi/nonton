/* eslint-disable object-curly-newline */
import DrawerInitiator from '../utils/drawerInitiator';
import BottomBarController from '../utils/bottombar-control';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ buttonToggle, appDrawer, darkSwitch, menuButton, content, bottombarMenus }) {
    this.buttonToggle = buttonToggle;
    this.appDrawer = appDrawer;
    this.darkSwitch = darkSwitch;
    this.menuButton = menuButton;
    this.content = content;
    this.bottombarMenus = bottombarMenus;

    this.initialAppShell();
  }

  initialAppShell() {
    // DrawerInitiator.init({
    //   button: this.buttonToggle,
    //   appDrawer: this.appDrawer,
    //   content: this.content,
    // });

    BottomBarController.init({
      buttonMenus: this.bottombarMenus,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
