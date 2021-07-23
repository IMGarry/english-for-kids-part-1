import { categories } from '../../../../../../public/cards';
import { BaseComponent } from '../../../../templates/base-component';
import { renderStatisticsBlock } from '../../../statistic/statistic';

export class NavigationList extends BaseComponent {
  private navigationLink?: BaseComponent;

  private mainMenuLink: BaseComponent;

  private statisticPage: BaseComponent;

  constructor(parentNode:HTMLElement) {
    super(parentNode, 'ul', ['navigation__list']);
    this.mainMenuLink = new BaseComponent(this.element, 'a', ['navigation__item'], 'Main menu');
    this.mainMenuLink.element.setAttribute('href', '#!');
    this.renderLinks();
    this.statisticPage = new BaseComponent(this.element, 'a', ['navigation__item'], 'Statistic');
    this.statisticPage.element.setAttribute('href', '#!');
    this.statisticPage.element.setAttribute('pageIndex', `${categories.length + 1}`);
  }

  renderLinks(): void {
    categories.forEach((category, index) => {
      this.navigationLink = new BaseComponent(this.element, 'a', ['navigation__item'], category);
      this.navigationLink.element.setAttribute('href', '#!');
      this.navigationLink.element.setAttribute('pageIndex', `${index + 1}`);
    });
  }
}
