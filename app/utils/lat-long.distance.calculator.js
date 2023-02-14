const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
}

const latlongDistanceCalculator = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

module.exports = {
  latlongDistanceCalculator
};

// test('lat-long calculator ', () => {
//   expect(latlongDistanceCalculator(1,2,3,4)).toBe(3);
// })

// test('distance to price calculator 5 * 10 to equal 50', () => {
//   //console.log(distanceToPriceCalculator(5, 10));
//   //expect(distanceToPriceCalculator(5, 10)).toBe(50);
// })
