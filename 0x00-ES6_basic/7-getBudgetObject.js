export default function getBudgetObject(myincome, mygdp, mycapita) {
  const budget = {
    income: myincome,
    gdp: mygdp,
    capita: mycapita,
  };

  return budget;
}
