import { cards } from '../../../../public/cards';
import { BaseComponent } from '../../templates/base-component';
import { CardTrainMode } from './card/cardTrainMode';

export class CardsTrainMode extends BaseComponent {
  private card?: CardTrainMode;

  // private audio: BaseComponent;

  constructor(parentNode:HTMLElement, page: number) {
    super(parentNode, 'div', ['cards']);
    this.renderTrainCards(page);
    // this.audio = new BaseComponent(this.element, 'audio', ['audio']);
    // this.audio.element.setAttribute('src', cards[0][0].audioSrc);
  }

  renderTrainCards(page: number): void {
    cards[page].forEach((card) => {
      this.card = new CardTrainMode(this.element, card.image, card.word, card.translation, card.audioSrc);
    });
  }
}
