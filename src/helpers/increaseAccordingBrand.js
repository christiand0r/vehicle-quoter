export const increaseAccordingBrand = brand => {
  const mapBrand = {
    americano: 1.15,
    asiatico: 1.05,
    europeo: 1.3,
  };

  return mapBrand[brand];
};
