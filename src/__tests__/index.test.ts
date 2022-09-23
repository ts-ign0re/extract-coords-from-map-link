import extractCoordsFromMapLink from '../index';
import json from '../__mocks__/data';

describe('extractCoordsFromMapLink', () => {
  json.forEach(link => {
    it('should extract coords from map link', () => {
      const coords = extractCoordsFromMapLink(link);
      if (coords) {
        console.log(coords);
        expect(coords.length).toEqual(2);
        expect(typeof coords[0]).toEqual('string');
        expect(typeof coords[1]).toEqual('string');
      } else {
        expect(coords).toEqual(null);
      }
    });
  });
});
