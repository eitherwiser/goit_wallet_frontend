// import axios from "axios";

export default async function fetchTransactions(token) {
  const response = await fetch(
    "https://goit-34-wallet.herokuapp.com/api/transactions",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const result = await response.json();

  return result;
}

// export default async function fetchTransactions() {
//   const resp = await axios.get(
//     "https://goit-34-wallet.herokuapp.com/api/transactions",
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ0MDlhZTBmMzI1MTI0ODE5ZjdiYyIsImlhdCI6MTY0NTA0MDY3NiwiZXhwIjoxNjQ1MDQ0Mjc2fQ.dKldEij2EGFZqQS84S9X5-aKPMs-4ejW2YOo3YiPkd8",
//       },
//     }
//   );
//   return resp.data;
// }
