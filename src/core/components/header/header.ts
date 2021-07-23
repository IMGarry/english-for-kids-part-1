import { BaseComponent } from '../../templates/base-component';
import { Sidebar } from './sidebar/sidebar';
import { Stars } from './stars/stars';
import { Switcher } from './switcher/switcher';

export class Header extends BaseComponent {
  constructor(parentNode:HTMLElement) {
    super(parentNode, 'header', ['header']);
    new Sidebar(this.element);
    new Stars(this.element);
    new Switcher(this.element);
  }
}
