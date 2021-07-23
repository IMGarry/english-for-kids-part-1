import { BaseComponent } from '../../../templates/base-component';

export class CardGameMode extends BaseComponent {
  private card: BaseComponent;

  private cardFront: BaseComponent;

  private audio: BaseComponent;

  constructor(parentNode:HTMLElement, image: string, frontText: string, backText: string, audio:string) {
    super(parentNode, 'div', ['card-container']);
    this.card = new BaseComponent(this.element, 'div', ['card']);
    this.cardFront = new BaseComponent(this.card.element, 'div', ['card__front']);
    this.audio = new BaseComponent(this.cardFront.element, 'audio', ['card__front-audio']);
    this.audio.element.setAttribute('src', `${audio}`);

    this.cardFront.element.style.backgroundImage = `url(${image})`;
  }

  playSound(): void {
    const sound = <HTMLAudioElement> this.element.querySelector('.card__front-audio');
    sound.play();
  }
}
