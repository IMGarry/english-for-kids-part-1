import { BaseComponent } from '../../../templates/base-component';

export class Switcher extends BaseComponent {
  private switchBtn: BaseComponent;

  private switchInput: BaseComponent;

  private switchText: BaseComponent;

  private switchHandle: BaseComponent;

  constructor(parentNode:HTMLElement) {
    super(parentNode, 'div', ['game-switcher']);
    this.switchBtn = new BaseComponent(this.element, 'label', ['switch__btn']);
    this.switchInput = new BaseComponent(this.switchBtn.element, 'input', ['switch__input']);
    this.switchInput.element.setAttribute('type', 'checkbox');
    this.switchText = new BaseComponent(this.switchBtn.element, 'span', ['switch__text']);
    this.switchHandle = new BaseComponent(this.switchBtn.element, 'span', ['switch__handle']);
  }
}
