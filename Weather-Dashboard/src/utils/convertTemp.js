export const convertTemp = (temp, unit) => {
  if (unit === "C") {
    return Math.round(((temp - 32) * 5) / 9);
  }

  return Math.round(temp);
};
