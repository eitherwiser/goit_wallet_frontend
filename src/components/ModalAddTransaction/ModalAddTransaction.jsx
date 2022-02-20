import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Datetime from "react-datetime";
// import moment from "moment";
import classNames from "classnames";

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

export default function ModalAddTransaction({ modalAction }) {
  const allCategories = useSelector(getTransactionCategories);
  const dispatch = useDispatch();
  const handleSubmit = ({ isIncome, categoryId, date, amount, comment }) => {
    dispatch(addTransaction({ isIncome, categoryId, date, amount, comment }));
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
        isIncome: false,
        categoryId: "",
        date: Date.now(),
        amount: "",
        comment: "",
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
                      type={`checkbox`}
                      id={`switch-toggle`}
                      name={`isIncome`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.isIncome}
                    />
                    <label
                      className={s.switch__track}
                      htmlFor={`switch-toggle`}></label>
                    <div className={s.switch__marker}></div>
                    <p className={s.switchIncome}>Доход</p>
                    <p className={s.switchCosts}>Расход</p>
                  </div>
                </div>

                {values.isIncome && (
                  <label className={s.span} htmlFor={`category`}>
                    <select
                      placeholder='Выберите категорию'
                      className={s.category}
                      name={`categoryId`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.categoryId}>
                      <option value='0' key={"1"} disabled>
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
                    placeholder='0.00'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                  {/* <input
                  value={values.date}
                  type={`date`}
                  name={`date`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  dateFormat={"DD.MM.YYY"}
                /> */}
                  <Datetime
                    className={s.date}
                    type={`date`}
                    name={`date`}
                    input={true}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    dateFormat={"DD.MM.YYY"}
                    timeFormat={false}
                    value={values.date}
                    // isValidDate={valid}
                    // renderInput={renderInput}
                  />
                  <DateIcon className={s.dateIcon} />
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
