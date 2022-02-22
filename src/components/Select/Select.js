import React, { useState, useEffect } from "react";
import Select from "react-select";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import { getToken } from "redux/auth/auth-selectors";
import { selectStyles } from "components/Select/selectStyles";
import { useSelector } from "react-redux";
import s from "components/Select/select.module.css";

import fetchData from "../../services/statistics";

const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (_, i) => {
  return format(new Date(0, i), "LLLL", {
    locale: ru,
  });
});

const monthOptions = Array(12)
  .fill(null)
  .map((_, index) => ({ value: index + 1, label: months[index] }));

const currentYear = new Date().getFullYear();
const years = [];
for (let i = currentYear; i >= 2018; i--) {
  years.push({ value: i, label: i.toString() });
}

function SelectDate({ fetchDate, loader }) {
  const [date, setDate] = useState({
    month: currentMonth,
    year: currentYear,
  });

  const token = useSelector(getToken);

  const updateDate = async (name, value) => {
    const newDate = { ...date, [name]: value };
    setDate(newDate);
    loader(true);
    const fetch = await fetchData(token, newDate);
    loader(false);
    fetchDate(fetch);
  };
  useEffect(() => {
    updateDate();
  }, []);

  return (
    <div className={s.selectContainer}>
      <Select
        styles={selectStyles}
        options={monthOptions}
        placeholder="Месяц"
        onChange={(option) => {
          updateDate("month", option.value);
        }}
        isSearchable={false}
        defaultValue={monthOptions.find((month) => month.value === date.month)}
      />
      <Select
        styles={selectStyles}
        options={years}
        placeholder="Год"
        onChange={(option) => {
          updateDate("year", option.value);
        }}
        isSearchable={false}
        defaultValue={years.find((year) => year.value === date.year)}
      />
    </div>
  );
}

export default SelectDate;
