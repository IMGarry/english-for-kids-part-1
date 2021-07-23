// this.audio.element.setAttribute('src', cards[0][0].audioSrc);
import { CardsTrainMode } from '../components/cards/cardsTrainMode';
import { CardsGameMode } from '../components/cards/cardsGameMode';
import { Playground } from '../components/playground/playground';
import {
  setSwitherState, switherState, setPageIndex, pageIndex,
} from '../constants/constants';
import { renderStatisticsBlock } from '../components/statistic/statistic';

export const chooseActivePageIndex = (e:Event):void => {
  const idx = <HTMLElement>e.currentTarget;
  const currentPageIndex = idx.getAttribute('pageIndex');
  setPageIndex(Number(currentPageIndex));
  // console.log(pageIndex.number);
};

export const chooseActiveLink = (): void => {
  const links = document.querySelectorAll('.navigation__item');
  links.forEach((link, index) => {
    link.addEventListener('click', (e:Event) => {
      chooseActivePageIndex(e);
      if (switherState.val) {
        if (pageIndex.number === 9) {
          renderStatisticsBlock();
        } else {
          renderCardsTrainMode(index);
        }
      } else if (!switherState.val) {
        renderCardsGameMode(index);
      }
    });
  });
};

export const renderCardsTrainMode = (cardsPage: number): void => {
  const cardsField = document.querySelector('.cards') as HTMLElement;
  cardsField.innerHTML = '';
  if (cardsPage === 0) {
    new Playground(cardsField);
    chooseActiveCard();
  } else {
    new CardsTrainMode(cardsField, cardsPage - 1);
  }
};

export const chooseActiveCard = (): void => {
  const cardLinks = document.querySelectorAll('.main-card');
  cardLinks.forEach((cardlink, index) => {
    cardlink.addEventListener('click', (e:Event) => {
      chooseActivePageIndex(e);
      if (switherState.val) {
        renderCardsTrainMode(index + 1);
      } else if (!switherState.val) {
        renderCardsGameMode(index + 1);
      }
    });
  });
};

export const renderCardsGameMode = (cardsPage: number): void => {
  const cardsField = document.querySelector('.cards') as HTMLElement;
  const starsField = <HTMLElement>document.querySelector('.stars-field');
  starsField.innerHTML = '';
  cardsField.innerHTML = '';
  if (cardsPage === 0) {
    new Playground(cardsField);
    chooseActiveCard();
  } else {
    new CardsGameMode(cardsField, cardsPage - 1);
  }
};

export const changeGameModeViev = () => {
  const categoryTop = document.querySelectorAll('.main-card');
  categoryTop.forEach((el) => {
    if (!switherState.val) {
      el.classList.add('main-card-gameMode');
    } else {
      el.classList.remove('main-card-gameMode');
    }
  });
};

export const toggleGameMode = () => {
  const gameSwitcher = <HTMLInputElement>document.querySelector('.game-switcher');
  if (!gameSwitcher?.classList.contains('gameMode')) {
    // console.log(switherState.val);
    changeGameModeViev();
  }
  if (gameSwitcher?.classList.contains('gameMode')) {
    changeGameModeViev();
    // console.log(switherState);
  }
};

export const changeGameMode = () => {
  const gameSwitcher = <HTMLInputElement>document.querySelector('.game-switcher');
  const switcher = <HTMLInputElement>document.querySelector('.switch__input');
  const starField = <HTMLElement>document.querySelector('.stars-field');

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      gameSwitcher.classList.add('gameMode');
      setSwitherState(false);
      toggleGameMode();
      if (pageIndex.number) {
        starField.classList.remove('hidden');
        renderCardsGameMode(pageIndex.number);
      }
    }
    if (!switcher.checked) {
      gameSwitcher.classList.remove('gameMode');
      setSwitherState(true);
      toggleGameMode();
      if (pageIndex.number) {
        starField.classList.add('hidden');
        renderCardsTrainMode(pageIndex.number);
      }
    }
  });
};

// export const closeSidebar = (): void => {
//   const sidebar = <HTMLElement>document.querySelector('.navigation__list')
//   document.body.addEventListener('click', (e: Event) => {
//     if (e.currentTarget != null) {
//       const target = e.target as Element
//     if (!target.classList.contains('show-navigation')) {
//       document.body.style.overflow = "hidden";
//     }
//     else {
//       document.body.style.overflow = "visible";
//     }
//   }
//   });
// };
