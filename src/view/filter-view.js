import {createElement} from '../render.js';
import {capitalizeFirstLetter} from '../utils.js';

const FILTER_TYPES = ['everything', 'future', 'present', 'past'];

const createFilterItemTemplate = (type) => {
  const capitalizedType = capitalizeFirstLetter(type);
  const isChecked = type === 'everything' ? 'checked' : '';

  return `
    <div class="trip-filters__filter">
      <input id="filter-${type}" class="trip-filters__filter-input visually-hidden" type="radio" name="trip-filter" value="${type}" ${isChecked}>
      <label class="trip-filters__filter-label" for="filter-${type}">${capitalizedType}</label>
    </div>
  `;
};

const createFilterTemplate = () => `
  <form class="trip-filters" action="#" method="get">
    ${FILTER_TYPES.map((type) => createFilterItemTemplate(type)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export default class FilterView {
  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
