import { Game } from './core/game';

export class App {
  game: Game;

  constructor(readonly parentNode: HTMLElement) {
    this.game = new Game(parentNode);
  }
}
