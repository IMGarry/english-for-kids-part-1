import { cards } from '../../../../public/cards';
import { changeGameMode, changeGameModeViev, toggleGameMode } from '../../api/api';
import { pageIndex, attempsCount, setSwitherState } from '../../constants/constants';
import { BaseComponent } from '../../templates/base-component';
import { Playground } from '../playground/playground';
import { CardGameMode } from './card/cardGameMode';

export class CardsGameMode extends BaseComponent {
  private card?: CardGameMode;

  public startGameButton: BaseComponent;

  constructor(parentNode: HTMLElement, page: number) {
    super(parentNode, 'div', ['cards']);

    this.startGameButton = new BaseComponent(parentNode, 'button', [
      'start-game-button',
    ]);
    this.startGameButton.element.innerText = 'Start game';
    this.renderGameCards(page);
  }

  renderGameCards(page: number): void {
    cards[page].forEach((card) => {
      this.card = new CardGameMode(
        this.element,
        card.image,
        card.word,
        card.translation,
        card.audioSrc,
      );
    });

    const starsField = <HTMLElement>document.querySelector('.stars-field');
    const cardsForGameMode = [...cards];
    // console.log(cardsForGameMode);
    let dataForGameMode = cardsForGameMode[pageIndex.number - 1].filter((element) => ({
      ...element,
    }));
    // console.log(dataForGameMode);
    dataForGameMode = dataForGameMode.sort(() => Math.random() - 0.5);
    let mistakeCounter = 0;
    let newGameButtonStatus = false;

    const playSoundFunc = (soundName: string) => {
      const audio = new Audio(`./audio/${soundName}`);
      audio.play();
    };

    const deleteFirstItemFromArray = () => {
      dataForGameMode.shift();
    };

    const addStarAnswer = (imgName: string) => {
      // console.log(starsField.childElementCount);

      if (starsField.childElementCount === attempsCount) {
        starsField.removeChild(starsField.childNodes[0]);
      }
      starsField.insertAdjacentHTML(
        'beforeend',
        `<img src=./img/${imgName} class=game__status-item>`,
      );
    };

    const rerenderBtn = () => {
      this.startGameButton.element.innerHTML = "<img  src='./img/repeat.svg' class='repeat'/>";
    };

    const countMistake = () => {
      mistakeCounter += 1;
    };

    const finishGame = () => {
      const gameSwitcher = <HTMLInputElement>document.querySelector('.game-switcher');
      const playground = new Playground(this.element);
      if (mistakeCounter === 0) {
        playSoundFunc('success.mp3');
        this.element.innerHTML = "<img src='./img/success.jpg' class='success'>";
        mistakeCounter = 0;
        setTimeout(() => {
          // playground.renderCards();
          starsField.innerHTML = '';
          this.element.innerHTML = '';

          gameSwitcher.checked = false;
          setSwitherState(false);
          new Playground(this.element);
          // changeGameModeViev()
          // new Playground(this.element);
          // renderCategoriesBlock();
        }, 4000);
      }
      if (mistakeCounter > 0) {
        playSoundFunc('failure.mp3');
        this.element.innerHTML = `<img src='./img/failure.jpg' class='failure'>
          <h2 class="category__description">You ended the game with ${mistakeCounter} mistakes</h2>`;
        mistakeCounter = 0;
        setTimeout(() => {
          // playground.renderCards();
          starsField.innerHTML = '';
          this.element.innerHTML = '';
          gameSwitcher.classList.remove('gameMode');
          new Playground(this.element);
          // renderCategoriesBlock();
        }, 4000);
      }
      newGameButtonStatus = false;
    };

    const tellTheWord = () => {
      if (dataForGameMode.length === 0) {
        finishGame();
        return;
      }
      const audio = new Audio(`./${dataForGameMode[0].audioSrc}`);
      audio.play();
    };

    const startGameInGameMode = (e: Event) => {
      const { target } = e;
      let imgSrc = '';
      if ((<HTMLElement>target).classList.contains('card__front')) {
        imgSrc = (<HTMLElement>target).style.backgroundImage.slice(5, -2);
        // console.log('imgSrc', imgSrc);
        // console.log(dataForGameMode[0].image);

        if (imgSrc !== dataForGameMode[0].image) {
          playSoundFunc('error.mp3');
          addStarAnswer('star.svg');
          countMistake();
        }
        if (imgSrc === dataForGameMode[0].image) {
          playSoundFunc('correct.mp3');
          deleteFirstItemFromArray();
          setTimeout(() => {
            tellTheWord();
          }, 2000);
          // @ts-ignore
          (<HTMLElement>target).parentNode.parentNode.classList.add('disabled');
          addStarAnswer('star-win.svg');
        }
      }
    };

    const buttonClickHandler = () => {
      tellTheWord();
      rerenderBtn();
      newGameButtonStatus = true;
      // console.log(newGameButtonStatus);
    };

    const checkGameStatus = (e: Event) => {
      if (newGameButtonStatus) {
        startGameInGameMode(e);
      }
    };

    // const btn = <HTMLElement>document.querySelector('.start-game-button')
    // console.log(this.startGameButton.element);

    this.startGameButton.element.addEventListener('click', buttonClickHandler);
    this.element.addEventListener('click', checkGameStatus);
    // const btn = document.querySelector(".btn");
  }
}
