function millionsRounding(citiesData) {
  return citiesData.map(([city, population]) => [
    city,
    Math.round(population / 1000000) * 1000000,
  ]);
}
const citiesData = [
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572],
];

const roundedCities = millionsRounding(citiesData);
console.log(roundedCities);
