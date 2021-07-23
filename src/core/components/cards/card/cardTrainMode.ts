import { BaseComponent } from '../../../templates/base-component';

export class CardTrainMode extends BaseComponent {
  private card: BaseComponent;

  private cardFront: BaseComponent;

  private cardBack?: BaseComponent;

  private cardRotate?: BaseComponent;

  private audio: BaseComponent;

  constructor(parentNode:HTMLElement, image: string, frontText: string, backText: string, audio:string) {
    super(parentNode, 'div', ['card-container']);
    this.card = new BaseComponent(this.element, 'div', ['card']);
    this.cardFront = new BaseComponent(this.card.element, 'div', ['card__front']);
    this.audio = new BaseComponent(this.cardFront.element, 'audio', ['card__front-audio']);
    this.audio.element.setAttribute('src', `${audio}`);
    this.cardFront.element.addEventListener('click', () => {
      this.playSound();
    });

    this.cardFront.element.style.backgroundImage = `url(${image})`;
    new BaseComponent(this.cardFront.element, 'span', ['card__text'], frontText);

    this.cardBack = new BaseComponent(this.card.element, 'div', ['card__back']);
    this.cardBack.element.style.backgroundImage = `url(${image})`;
    new BaseComponent(this.cardBack.element, 'span', ['card__text'], backText);

    this.cardRotate = new BaseComponent(this.card.element, 'img', ['card__rotate-img']);
    this.cardRotate.element.setAttribute('src', './img/refresh.svg');

    this.cardRotate.element.addEventListener('click', () => {
      this.rotateCard();
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.classList.remove('flipped');
    });
  }

  rotateCard(): void {
    this.element.classList.add('flipped');
  }

  playSound(): void {
    const sound = <HTMLAudioElement> this.element.querySelector('.card__front-audio');
    sound.play();
  }
}
