import { BaseComponent } from '../../../../templates/base-component';

export class Hamburger extends BaseComponent {
  private hamburgerCheckbox: BaseComponent;

  constructor(parentNode:HTMLElement) {
    super(parentNode, 'div', ['hamburger']);
    this.hamburgerCheckbox = new BaseComponent(this.element, 'input', ['hamburger__checkbox']);
    this.hamburgerCheckbox.element.setAttribute('type', 'checkbox');
    new BaseComponent(this.element, 'span', ['hamburger__line']);
  }
}
