import { BaseComponent } from '../../../templates/base-component';
import { Hamburger } from './hamburger/hamburger';
import { NavigationList } from './navigation-list/navigation-list';

export class Sidebar extends BaseComponent {
  private hamburger: Hamburger;

  private navigationList: NavigationList;

  constructor(parentNode:HTMLElement) {
    super(parentNode, 'nav', ['navigation']);
    this.hamburger = new Hamburger(this.element);
    this.navigationList = new NavigationList(this.element);

    this.hamburger.element.addEventListener('click', () => {
      this.showNavigation();
      this.hamburgerAnimation();
    });
  }

  showNavigation(): void {
    this.navigationList.element.classList.toggle('show-navigation');
  }

  hamburgerAnimation(): void {
    this.hamburger.element.classList.toggle('hamburger_rotate');
  }
}
