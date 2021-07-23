import { statisticsCard } from '../../data/statistic.data';
import { StatisticsCardType } from '../../constants/constants';

export const renderStatisticsBlock = () => {
  const main = <HTMLElement>document.querySelector('.main');
  const tableHeaderItems = ['Categories', 'Words', 'Translation',
    'Train Mode', 'Correct', 'Errors', 'Errors,%'];
  main.innerHTML = `
    <table class="table">
      <tr class="table-header">
      </tr>
    </table>`;

  const table = <HTMLElement>document.querySelector('.table');
  const tableHeader = <HTMLElement>document.querySelector('.table-header');
  tableHeaderItems.map((h) => tableHeader.insertAdjacentHTML('beforeend',
    `<th class="table-item table-header__item">${h}</th>`));

  for (let i = 0; i < statisticsCard.length; i += 1) {
    statisticsCard.map((item: Array<StatisticsCardType>) => table.insertAdjacentHTML('beforeend', `
    <tr class="table-body">
        <td class="table-item table-body__item">${item[i].category}</td>
        <td class="table-item table-body__item">${item[i].word}</td>
        <td class="table-item table-body__item">${item[i].translation}</td>
        <td class="table-item table-body__item">${item[i].trainMode}</td>
        <td class="table-item table-body__item">${item[i].correct}</td>
        <td class="table-item table-body__item">${item[i].errors}</td>
        <td class="table-item table-body__item">${item[i].errorsPercent}</td>
    </tr>`));
  }
};
