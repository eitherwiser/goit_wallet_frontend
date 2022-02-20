import { Formik, Form } from "formik";
import * as Yup from "yup";

import classNames from "classnames";

import DatePicker from "@mui/lab/DatePicker";
import * as React from "react";

import ruLocale from "date-fns/locale/ru";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import { ReactComponent as IncomeIcon } from "../../images/modal-transaction/income.svg";
// import { ReactComponent as ConsumptionIcon } from "../../images/modal-transaction/consumption.svg";

import s from "./ModalAddTransaction.module.css";
import vh from "../../stylesheet/visuallyHidden.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "redux/transactions/transaction-operations";
import { useState, useEffect } from "react";

import { getTransactionCategories } from "redux/auth/auth-selectors";

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Должно быть числом")
    .required("Обязательное поле"),
  comment: Yup.string(),
});
const localeMap = {
  ru: ruLocale,
};

const maskMap = {
  fr: "__/__/____",
  en: "__/__/____",
  ru: "__.__.____",
  de: "__.__.____",
};
export default function ModalAddTransaction() {
  let locale = "ru";
  const [value, setValue] = React.useState(Date.now());

  const allCategories = useSelector(getTransactionCategories);
  const dispatch = useDispatch();

  const handleSubmit = ({ date, isIncome, amount, comment, categoryId }) => {
    console.log(date, isIncome, amount, comment, categoryId);
    dispatch(addTransaction({ date, isIncome, amount, comment, categoryId }));
  };

  return (
    <Formik
      initialValues={{
        date: value,
        isIncome: false,
        amount: "",
        comment: "",
        categoryId: "",
      }}
      validateOnBlur
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,

        dirty,
      }) => (
        <div className={s.formBox}>
          <Form>
            <div className={s.form}>
              <b className={s.modalDescription}>Добавить транзакцию</b>

              <div className={s.switch__container}>
                <div className={s.switch__control}>
                  <input
                    className={s.switch__toggle}
                    type="checkbox"
                    id={`switch-toggle`}
                    name="isIncome"
                    onBlur={handleBlur}
                    value={values.isIncome}
                    onChange={handleChange}
                  />
                  <label
                    className={s.switch__track}
                    htmlFor={`switch-toggle`}
                  ></label>
                  <div className={s.switch__marker}></div>
                  <p className={s.switchIncome}>Доход</p>
                  <p className={s.switchCosts}>Расход</p>
                </div>
              </div>

              {values.isIncome === true && (
                <label className={s.span} htmlFor={`category`}>
                  {/* <span className={s.categoryText}>Выберите категорию</span> */}
                  <select
                    // placeholder="Выберите категорию"
                    className={s.category}
                    name="categoryId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.categoryId}
                  >
                    <option value="0" key={"1"}>
                      Выберите категорию
                    </option>
                    {allCategories.map(({ name, id }) => {
                      return (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </label>
              )}

              <div className={s.subBox}>
                {touched.amount && errors.amount && (
                  <span className={s.error}>{errors.amount}</span>
                )}
                <input
                  className={s.sum}
                  type={`number`}
                  name={`amount`}
                  placeholder="0.00"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                />
                {/* <input
                  value={values.date}
                  type="date"
                  name="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                /> */}
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={localeMap[locale]}
                >
                  <div>
                    <DatePicker
                      mask={maskMap[locale]}
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </LocalizationProvider>
              </div>

              {touched.comment && errors.comment && (
                <span className={s.error}>{errors.comment}</span>
              )}
              <input
                className={s.comment}
                name={`comment`}
                type={`text`}
                placeholder="Комментарий"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />

              <button
                className={classNames(s.btn, s.btnAdd)}
                type={`submit`}
                disabled={!isValid || !dirty}
              >
                Добавить
              </button>
              <button
                className={classNames(s.btn, s.btnCancel)}
                type={`submit`}
                disabled={!isValid || !dirty}
              >
                Отмена
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
