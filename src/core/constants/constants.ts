const namePath = 'assets/sound';

export const gameSwitcher = <HTMLInputElement>document.querySelector('.game-switcher');

export const audioMap = {
  gameSuccess: `${namePath}/`,
  gameError: `${namePath}/`,
};

export const gameMode = {
  game: 'to game mode',
  train: 'to train mode',
};

export type CardItemsDataType = {
  word: string
  translation: string
  image: string
  audioSrc: string
};

export type StatisticsCardType = {
  category: string
  word: string
  translation: string
  image: string
  audioSrc: string
  trainMode: number
  correct: number
  errors: number
  errorsPercent: number
};

export const pageIndex = {
  number: 0,
};

export const attempsCount = 18;

export const setPageIndex = (value: number) => {
  pageIndex.number = value;
};

export const switherState = {
  val: true,
};

export const setSwitherState = (value: boolean) => {
  switherState.val = value;
};
