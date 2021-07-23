import { cards, categories } from '../../../../public/cards';
import { changeGameMode, changeGameModeViev } from '../../api/api';
import { BaseComponent } from '../../templates/base-component';

const FIRST_CARD = 0;

export class Playground extends BaseComponent {
  private mainCard?: BaseComponent;

  private mainImg?: BaseComponent;

  constructor(parentNode:HTMLElement) {
    super(parentNode, 'div', ['cards', 'main-cards']);

    this.renderCards();
    changeGameMode();
  }

  renderCards(): void {
    categories.forEach((category, index) => {
      this.mainCard = new BaseComponent(this.element, 'a', ['main-card']);
      this.mainCard.element.setAttribute('href', '#!');
      this.mainCard.element.setAttribute('pageIndex', `${index + 1}`);
      this.mainImg = new BaseComponent(this.mainCard.element, 'img', ['main-img']);
      this.mainImg.element.setAttribute('alt', category);
      const cardImg = cards[index][FIRST_CARD].image;
      this.mainImg.element.setAttribute('src', cardImg);
      new BaseComponent(this.mainCard.element, 'span', ['main-card__text'], category);
    });
    // changeGameModeViev();
  }
}
