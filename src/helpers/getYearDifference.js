export const getYearDifference = year => {
  const currentlyYear = new Date().getFullYear();

  return currentlyYear - parseInt(year, 10);
};
