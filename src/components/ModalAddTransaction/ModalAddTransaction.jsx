import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import * as React from "react";
import { addTransaction } from "redux/transactions/transaction-operations";
import { getTransactionCategories } from "../../redux/auth/auth-selectors";
import { useEffect } from "react";
import closeIcon from "../../images/modal-transaction/close.svg";

import s from "./ModalAddTransaction.module.css";

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Должно быть числом")
    .required("Обязательное поле"),
  comment: Yup.string(),
});

export default function ModalAddTransaction({ modalAction }) {
  const allCategories = useSelector(getTransactionCategories);
  const dispatch = useDispatch();
  const handleSubmit = ({ date, isIncome, amount, comment, categoryId }) => {
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

  // function makeTime(data) {
  //   console.log("из календаря", data);
  //   const date = Date.now();
  //   console.log("текущее unix время", date);
  //   const interDate = data.slice(0, data.length - 6);
  //   console.log("обрезанное время из календаря", interDate);
  //   const newDate = date
  //     .toString()
  //     .split("")
  //     .slice(7, date.toString().length)
  //     .join("");
  //   console.log("обрезаное текущее unix время", newDate);
  //   const result = Number(interDate + newDate);
  //   console.log("результат", result);
  //   return result;
  // }

  return (
    <Formik
      initialValues={{
        date: new Date().toISOString().substr(0, 10),
        isIncome: true,
        amount: "",
        comment: "",
        categoryId: "",
      }}
      validateOnBlur
      onSubmit={({ date, isIncome, ...all }, { resetForm }) => {
        date = Date.parse(date);
        console.log(date);
        console.log(typeof date);
        isIncome = !isIncome;
        handleSubmit({ date, isIncome, ...all });
        resetForm();
        modalAction();
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
            <button type='button' className={s.closeBtn} onClick={modalAction}>
              <img src={closeIcon} alt='' />
            </button>
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
                      checked={values.isIncome}
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
                  <input
                    className={s.date}
                    value={values.date}
                    type='date'
                    name='date'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
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
