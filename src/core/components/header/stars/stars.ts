import { BaseComponent } from '../../../templates/base-component';

export class Stars extends BaseComponent {
  private starsField: BaseComponent;

  constructor(parentNode:HTMLElement) {
    super(parentNode, 'div', ['stars-field', 'hidden']);
    this.starsField = new BaseComponent(this.element, 'div', ['star']);
  }
}
