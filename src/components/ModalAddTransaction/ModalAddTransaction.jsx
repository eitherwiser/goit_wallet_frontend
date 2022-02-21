import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Datetime from "react-datetime";
// import moment from "moment";
import classNames from "classnames";
import DatePicker from "@mui/lab/DatePicker";
import * as React from "react";
import ruLocale from "date-fns/locale/ru";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { addTransaction } from "redux/transactions/transaction-operations";
import { getTransactionCategories } from "../../redux/auth/auth-selectors";
import { useEffect } from "react";

import { ReactComponent as DateIcon } from "../../images/modal-transaction/date.svg";

import s from "./ModalAddTransaction.module.css";

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Должно быть числом")
    .required("Обязательное поле"),
  comment: Yup.string(),
});

// var yesterday = moment().subtract(1, "day");
// function valid(current) {
//   return current.isAfter(yesterday);
// }
const localeMap = {
  ru: ruLocale,
};

const maskMap = {
  fr: "__/__/____",
  en: "__/__/____",
  ru: "__.__.____",
  de: "__.__.____",
};

export default function ModalAddTransaction({ modalAction }) {
  let locale = "ru";
  const [value, setValue] = React.useState(Date.now());
  const allCategories = useSelector(getTransactionCategories);
  const dispatch = useDispatch();
  const handleSubmit = ({ date, isIncome, amount, comment, categoryId }) => {
    console.log(date, isIncome, amount, comment, categoryId);
    dispatch(addTransaction({ date, isIncome, amount, comment, categoryId }));
  };

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      modalAction();
    }
  };

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      modalAction();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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
      validationSchema={validationSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        dirty,
      }) => (
        <div className={s.overlay} onClick={onBackdropClick}>
          <div className={s.formBox}>
            <Form>
              <div className={s.form}>
                <b className={s.modalDescription}>Добавить транзакцию</b>

                <div className={s.switch__container}>
                  <div className={s.switch__control}>
                    <input
                      className={s.switch__toggle}
                      type='checkbox'
                      id={`switch-toggle`}
                      name='isIncome'
                      onBlur={handleBlur}
                      value={values.isIncome}
                      onChange={handleChange}
                    />
                    <label
                      className={s.switch__track}
                      htmlFor={`switch-toggle`}></label>
                    <div className={s.switch__marker}></div>
                    <p className={s.switchIncome}>Доход</p>
                    <p className={s.switchCosts}>Расход</p>
                  </div>
                </div>

                {values.isIncome === true && (
                  <label className={s.span} htmlFor={`category`}>
                    {/* <span className={s.categoryText}>Выберите категорию</span> */}
                    <select
                      className={s.category}
                      name='categoryId'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.categoryId}>
                      <option value='0' key={"1"}>
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
                  <input
                    className={s.sum}
                    type={`number`}
                    name={`amount`}
                    placeholder='0.00'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                  {touched.amount && errors.amount && (
                    <span className={s.error}>{errors.amount}</span>
                  )}
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
                    locale={localeMap[locale]}>
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
                  placeholder='Комментарий'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />

                <button
                  className={classNames(s.btn, s.btnAdd)}
                  type={`submit`}
                  disabled={!isValid || !dirty}>
                  Добавить
                </button>
                <button
                  onClick={modalAction}
                  className={classNames(s.btn, s.btnCancel)}
                  type='button'>
                  Отмена
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
