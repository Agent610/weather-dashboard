export const getRecentCities = () => {
  return JSON.parse(localStorage.getItem("recentCities")) || [];
};

export const saveRecentCity = (city) => {
  const cities = getRecentCities();

  if (!cities.includes(city)) {
    cities.unshift(city);
  }

  localStorage.setItem("recentCities", JSON.stringify(cities.slice(0, 5)));
};
