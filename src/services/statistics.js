export default async function fetchData(token, date) {
  const response = await fetch(
    `https://goit-34-wallet.herokuapp.com/api/statistics?year=${date.year}&month=${date.month}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}
