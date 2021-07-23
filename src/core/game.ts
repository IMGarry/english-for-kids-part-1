import {
  chooseActiveLink, chooseActiveCard,
} from './api/api';
import { BaseComponent } from './templates/base-component';
import { Playground } from './components/playground/playground';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

export class Game extends BaseComponent {
  constructor(parentNode:HTMLElement) {
    super(parentNode, 'div', ['game']);
    new Header(this.element);
    const main = new BaseComponent(this.element, 'section', ['main']);
    new Playground(main.element);
    new Footer(this.element);

    chooseActiveLink();
    chooseActiveCard();
    // closeSidebar();
  }
}
