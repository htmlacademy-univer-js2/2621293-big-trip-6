import { getRandomPoint, mockDestinations, mockOffers } from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: 3}, getRandomPoint);
  destinations = mockDestinations;
  offers = mockOffers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
