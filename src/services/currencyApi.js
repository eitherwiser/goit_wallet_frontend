async function fetchCurrency() {
  const response = await fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  );
  const data = await response.json();

  return data;
}

export default { fetchCurrency };
