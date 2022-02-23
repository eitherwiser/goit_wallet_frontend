import React, { useEffect, useState } from "react";
import currencyApi from "services/currencyApi";
import LoaderSpinner from "components/LoaderComponentCurrency/LoaderComponent";

import { currencies } from "assets/constants";
import styles from "./Currency.module.css";

export default function CurrencyTable() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const data = await currencyApi.fetchCurrency();
      const filteredCurrencies = [];
      currencies.forEach((currency) => {
        data.forEach((element) => {
          parseInt(element.buy).toFixed(2);
          if (element.ccy === currency) {
            filteredCurrencies.push({
              ccy: element.ccy,
              buy: Number(element.buy).toFixed(2),
              sale: Number(element.sale).toFixed(2),
            });
          }
        });
      });
      setCurrency(filteredCurrencies);
      localStorage.setItem("currency", JSON.stringify(filteredCurrencies));
      localStorage.setItem("currencyTime", Date.now());
    };
    let currencyLS = JSON.parse(localStorage.getItem("currency"));
    let currencyTime = JSON.parse(localStorage.getItem("currencyTime"));
    if (!currencyLS) {
      fetchCurrency();
    }
    if (Date.now() - currencyTime > 3600000) {
      fetchCurrency();
    } else {
      setCurrency(currencyLS);
    }
  }, []);

  return (
    <div className={styles.currency}>
      {currency.length === 0 ? (
        <div className={styles.loader}>
          <LoaderSpinner />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Валюта</td>
              <td>Покупка</td>
              <td>Продажа</td>
            </tr>
          </thead>
          <tbody>
            {currency.map((item) => {
              return (
                <tr key={item.ccy}>
                  <td>{item.ccy}</td>
                  <td>{item.buy}</td>
                  <td>{item.sale}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
