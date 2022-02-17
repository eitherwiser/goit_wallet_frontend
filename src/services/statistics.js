export default async function fetchCurrency(month, year) {
  const response = await fetch(
    "https://goit-34-wallet.herokuapp.com/api/statistics/2020/02"
  );
  const data = await response.json();
  //   console.log(data)
  return data;
}
