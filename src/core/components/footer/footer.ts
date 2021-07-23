import { BaseComponent } from '../../templates/base-component';

export class Footer extends BaseComponent {
  constructor(parentNode:HTMLElement) {
    super(parentNode, 'footer', ['footer']);

    this.element.innerHTML = `
    <ul class="footer-nav">
      <li class="footer-nav__item">
        <a href="https://github.com/IMGarry">GitHub</a>
      </li>
      <li class="footer-nav__item">2021</li>
      <li class="footer-nav__item">
        <a href="https://rs.school/js/">
        <img src="./img/rs_school_js.svg" alt="rsSchool" class="footer-nav__item-pic"></a>
      </li>
    </ul>
    `;
  }
}
