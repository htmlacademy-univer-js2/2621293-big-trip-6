import { render } from '../render.js';
import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class BoardPresenter {
  eventListComponent = new EventListView();

  constructor({ boardContainer, pointsModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];

    render(new SortView(), this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    render(new EditPointView({
      point: this.boardPoints[0],
      destination: this.destinations.find((d) => d.id === this.boardPoints[0].destination),
      offers: this.offers.find((o) => o.type === this.boardPoints[0].type).offers
    }), this.eventListComponent.getElement());

    for (let i = 1; i < this.boardPoints.length; i++) {
      const point = this.boardPoints[i];
      const destination = this.destinations.find((d) => d.id === point.destination);
      const pointOffers = this.offers.find((o) => o.type === point.type).offers;

      render(new PointView({ point, destination, offers: pointOffers }), this.eventListComponent.getElement());
    }
  }
}
