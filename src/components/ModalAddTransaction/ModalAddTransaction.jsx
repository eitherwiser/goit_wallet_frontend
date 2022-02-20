import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Datetime from "react-datetime";
import classNames from "classnames";

import s from "./ModalAddTransaction.module.css";
import vh from "../../stylesheet/visuallyHidden.module.css";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  sum: Yup.number()
    .typeError("Должно быть числом")
    .required("Обязательное поле"),
  comment: Yup.string(),
});

export default function ModalAddTransaction() {
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const dispatch = useDispatch();
  const handleSubmit = ({ checkbox, category, date, sum, comment }) => {
    console.log(checkbox, category, date, sum, comment);
    // dispatch({ checkbox, category, date, sum, comment });
  };

  return (
    <Formik
      initialValues={{
        checkbox: false,
        category: "",
        date: "",
        sum: "",
        comment: "",
      }}
      validateOnBlur
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
        // console.log(values);
      }}
      validationSchema={validationSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className={s.formBox}>
          <Form>
            <div className={s.form}>
              <b className={s.modalDescription}>Добавить транзакцию</b>

              {/* <div className={s.boxCheckbox}>
                <p className={s.income}>Доход</p>
                <input
                  type={`checkbox`}
                  id={`check`}
                  className={classNames(s.checkbox, vh.visuallyHidden)}
                  name={`checkbox`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.checkbox}
                />
                <label htmlFor={`check`} className={s.checkLabel}></label>
                <p className={s.consumption}>Расход</p>
              </div> */}
              <div className={s.switch__container}>
                <div className={s.switch__control}>
                  <input
                    className={s.switch__toggle}
                    type={`checkbox`}
                    id={`switch-toggle`}
                    name={`checkbox`}
                    checked={checkboxChecked}
                    onChange={(event) => {
                      setCheckboxChecked(event.target.checked);
                    }}
                    onBlur={handleBlur}
                    value={values.checkbox}
                  />
                  <label
                    className={s.switch__track}
                    htmlFor={`switch-toggle`}></label>
                  <div className={s.switch__marker}></div>
                  <p className={s.switchIncome}>Доход</p>
                  <p className={s.switchCosts}>Расход</p>
                </div>
              </div>

              {checkboxChecked && (
                <label className={s.span} htmlFor={`category`}>
                  {/* <span className={s.categoryText}>Выберите категорию</span> */}
                  <select
                    placeholder='Выберите категорию'
                    className={s.category}
                    name={`category`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}>
                    <option>Выберите категорию</option>
                    <option>Основной</option>
                    <option>Еда</option>
                    <option>Авто</option>
                    <option>Развитие</option>
                    <option>Дети</option>
                    <option>Дом</option>
                    <option>Образование</option>
                    <option>Остальное</option>
                  </select>
                </label>
              )}

              <div className={s.subBox}>
                {touched.sum && errors.sum && (
                  <span className={s.error}>{errors.sum}</span>
                )}
                <input
                  className={s.sum}
                  type={`number`}
                  name={`sum`}
                  placeholder='0.00'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sum}
                />
                <input
                  className={s.date}
                  type={`date`}
                  name={`date`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.date}
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
                className={classNames(s.btn, s.btnCancel)}
                type={`submit`}
                disabled={!isValid || !dirty}>
                Отмена
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
