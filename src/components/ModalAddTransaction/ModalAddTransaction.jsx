import { Formik, Form } from "formik";
import * as Yup from "yup";
import Datetime from "react-datetime";
import classNames from "classnames";

import { ReactComponent as IncomeIcon } from "../../images/modal-transaction/income.svg";
import { ReactComponent as ConsumptionIcon } from "../../images/modal-transaction/consumption.svg";

import s from "./ModalAddTransaction.module.css";
import vh from "../../stylesheet/visuallyHidden.module.css";

const validationSchema = Yup.object().shape({
  sum: Yup.number()
    .typeError("Должно быть числом")
    .required("Обязательное поле"),
  comment: Yup.string(),
});

export default function ModalAddTransaction() {
  return (
    <Formik
      initialValues={{
        sum: "",
        comment: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
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
        handleSubmit,
        dirty,
      }) => (
        <div className={s.formBox}>
          <Form>
            <div className={s.form}>
              <b className={s.modalDescription}>Добавить транзакцию</b>
              <div className={s.boxCheckbox}>
                <p className={s.income}>Доход</p>
                {/* <IncomeIcon /> */}
                <input
                  type={`checkbox`}
                  id={`check`}
                  className={classNames(s.checkbox, vh.visuallyHidden)}
                />
                <label htmlFor={`check`} className={s.checkLabel}></label>
                {/* <ConsumptionIcon /> */}
                <p className={s.consumption}>Расход</p>
              </div>

              <p className={s.categoryText}> Выберите категорию</p>
              {/* <label className={s.span}>
                <span className={s.categoryText}>Выберите категорию</span> */}
              <select className={s.category}>
                <option></option>
                <option>Основной</option>
                <option>Еда</option>
                <option>Авто</option>
                <option>Развитие</option>
                <option>Дети</option>
                <option>Дом</option>
                <option>Образование</option>
                <option>Остальное</option>
              </select>
              {/* </label> */}

              <div className={s.subBox}>
                {touched.sum && errors.sum && (
                  <span className={s.error}>{errors.sum}</span>
                )}
                <input
                  className={s.sum}
                  type={`number`}
                  name={`sum`}
                  placeholder="0.00"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sum}
                />
                <input className={s.date} type={`date`} />
                {/* Date.now()*/}
                {/* Datetime */}
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
                onClick={handleSubmit}
              >
                Добавить
              </button>
              <button
                className={classNames(s.btn, s.btnCancel)}
                type={`submit`}
                onClick={handleSubmit}
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
