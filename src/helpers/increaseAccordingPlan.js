export const increaseAccordingPlan = plan => {
  const mapBrand = {
    básico: 1.2,
    completo: 1.5,
  };

  return mapBrand[plan];
};

//In this cas we're have 2 plans is valid use:
//: plan === basic ? 1.2 : 1.5
//But I like this form is more easy adding more cases in the future
